const express = require('express');
const router = express.Router();

const firestore = require('../../configs/firestore');
const errorGenerator = require('../../utils/errorGenerator');
const sendHookToSlack = require('../../utils/sendHookToSlack');
const verifyAccess = require('../../middlewares/verifyAccess');

router.post('/', verifyAccess, async (req, res) => {
  try {
    const {
      name,
      interest,
      major,
      phone,
      birth_year,
      email,
      is_male,
      application_statement,
      portfolio_url,
    } = req.body;

    if (!name) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!interest) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!major) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!phone) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!birth_year) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!email) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!application_statement) {
      throw errorGenerator({
        code: 'apply/no-params',
        message: '잘못된 요청입니다.',
      });
    }

    const db = firestore.collection('application');

    const application_docs = await db.where('email', '==', email).get();

    if (!application_docs.empty) {
      throw errorGenerator({
        code: 'apply/already-applied',
        message: '이미 지원한 이메일입니다.',
      });
    }

    const data = {
      name,
      interest,
      major,
      phone: phone.split('-').join(''),
      birth_year,
      email,
      is_male,
      application_statement,
      portfolio_url,
      time_interview: '',
      is_confirmed: false,
    };
    console.log(data);

    await db.add(data);
    await sendHookToSlack('피스메인 동아리 지원자 알림', '지원자', name);

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    const {code, message} = err;
    switch (code) {
    case 'auth/wrong-access-key':
      res.status(401).json({code, message});
      break;
    case 'apply/no-params':
      res.status(400).json({code, message});
      break;
    case 'apply/already-applied':
      res.status(409).json({code, message});
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
