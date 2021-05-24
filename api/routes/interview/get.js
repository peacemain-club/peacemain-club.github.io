const express = require('express');
const router = express.Router();

const firestore = require('../../configs/firestore');
const parseKoreanDate = require('../../utils/parseKoreanDate');
const verifyAccess = require('../../middlewares/verifyAccess');

router.get('/', verifyAccess, async (req, res) => {
  try {
    const db = firestore.collection('interview');

    const interview_doc = await db.get();
    const schedule_list = [];

    interview_doc.docs.forEach((v, i) => {
      const element = {
        date: parseKoreanDate(v.id),
        available_time: v.data().time,
      };
      schedule_list.push(element);
    });

    res.status(200).json({schedule_list});
  } catch (err) {
    console.log(err);
    const {code, message} = err;
    switch (code) {
    case 'auth/wrong-access-key':
      res.status(401).json({code, message});
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
