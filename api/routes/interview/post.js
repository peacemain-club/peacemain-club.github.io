const express = require('express');
const router = express.Router();

const firestore = require('../../configs/firestore');
const errorGenerator = require('../../utils/errorGenerator');
const verifyAccess = require('../../middlewares/verifyAccess');

router.post('/', verifyAccess, async (req, res) => {
  try {
    const TIME_NOW = new Date().getTime();
    const TIME_OPEN = 1613358000000;
    console.log(`timestamp: ${TIME_NOW}, OPEN at ${TIME_OPEN}`);

    if (TIME_NOW < TIME_OPEN) {
      throw errorGenerator({
        code: 'interview/too-early',
        message: '아직 선택기간이 아닙니다. 2월 15일 12:00 부터 선택이 가능합니다.',
      });
    }
    const {time_want, uid} = req.body;
    console.log(`uid: ${uid} at ${TIME_NOW}`);

    const time_string_list = time_want.split(' ');
    let month_string = time_string_list[0].slice(0, -1);
    let date_string = time_string_list[1].slice(0, -1);
    const time_string = time_string_list[3];

    if (month_string.length === 1) {
      month_string = '0' + month_string;
    }
    if (date_string.length === 1) {
      date_string = '0' + date_string;
    }

    const schedule = `2021${month_string}${date_string}`;

    if (!time_want) {
      throw errorGenerator({
        code: 'interview/no-params',
        message: '잘못된 요청입니다.',
      });
    }
    if (!uid) {
      throw errorGenerator({
        code: 'interview/no-params',
        message: '잘못된 요청입니다.',
      });
    }

    const db = firestore;

    const application_ref = db
      .collection('application')
      .doc(uid);

    const application_doc = await application_ref.get();

    if (!application_doc.exists) {
      throw errorGenerator({
        code: 'interview/no-user',
        message: '없는 유저입니다.',
      });
    }

    const {time_interview} = application_doc.data();

    if (time_interview) {
      throw errorGenerator({
        code: 'interview/already-scheduled',
        message: '이미 신청했습니다. 변경을 원하시면 peacemain@kakao.com으로 연락해주세요.',
      });
    }

    let atomic = true;

    await db.runTransaction(async (t) => {
      const schedule_ref = db.collection('interview').doc(schedule);
      const schedule_doc = await schedule_ref.get();

      const {time} = schedule_doc.data();
      const time_index = time.findIndex((v) => v.time === time_string);

      if (time[time_index].is_available) {
        time[time_index] = {time: time[time_index].time, is_available: false, uid};

        await Promise.all([
          schedule_ref.update({time: time}),
          application_ref.update({time_interview: time_want}),
        ]);
      } else {
        atomic = false;
      }
    });

    if (!atomic) {
      throw errorGenerator({
        code: 'interview/already-reserved',
        message: '신청할 수 없는 시간입니다. 다른 사람이 더 빨리 신청했나봐요ㅜㅠㅠ',
      });
    }

    res.status(200).json({});
  } catch (err) {
    console.log(err);
    const {code, message} = err;
    switch (code) {
    case 'auth/wrong-access-key':
      res.status(401).json({code, message});
      break;
    case 'interview/no-params':
      res.status(400).json({code, message});
      break;
    case 'interview/no-user':
      res.status(404).json({code, message});
      break;
    case 'interview/already-scheduled':
      res.status(409).json({code, message});
      break;
    case 'interview/too-early':
      res.status(409).json({code, message});
      break;
    case 'interview/already-reserved':
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
