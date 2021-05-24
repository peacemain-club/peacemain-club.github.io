const express = require('express');
const router = express.Router();

const firestore = require('../../configs/firestore');
const errorGenerator = require('../../utils/errorGenerator');
const verifyAccess = require('../../middlewares/verifyAccess');

router.get('/', verifyAccess, async (req, res) => {
  try {
    const {name, phone} = req.query;

    if (!name) {
      throw errorGenerator({
        code: 'login/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!phone) {
      throw errorGenerator({
        code: 'login/no-params',
        message: '잘못된 요청입니다.',
      });
    }

    const db = firestore.collection('application');

    const user_doc = await db
      .where('name', '==', name)
      .where('phone', '==', phone.split('-').join(''))
      .get();

    if (user_doc.empty) {
      throw errorGenerator({
        code: 'login/no-user',
        message: '없는 지원자입니다. 이름과 휴대폰 번호를 다시 확인해주세요.',
      });
    }

    const {is_confirmed} = user_doc.docs[0].data();

    if (!is_confirmed) {
      throw errorGenerator({
        code: 'login/user-not-confirmed',
        message: '확인되지 않은 지원자입니다.',
      });
    }

    const uid = user_doc.docs[0].id;

    res.status(200).json({uid});
  } catch (err) {
    console.log(err);
    const {code, message} = err;
    switch (code) {
    case 'auth/wrong-access-key':
      res.status(401).json({code, message});
      break;
    case 'login/no-params':
      res.status(400).json({code, message});
      break;
    case 'login/no-user':
      res.status(404).json({code, message});
      break;
    case 'login/user-not-confirmed':
      res.status(403).json({code, message});
      break;
    default:
      res.status(500).json({
        code: code || '',
        message: '서버에 에러가 발생했습니다. 다시 시도해주세요.',
      });
    }
  }
});

module.exports = router;
