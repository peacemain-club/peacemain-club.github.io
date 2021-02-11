import axios from 'axios';

import {ENDPOINT_INTERVIEW} from 'configs/api';

interface Schedule {
  date: string,
  available_time: Array<{
    time: string,
    is_available: boolean,
  }>
}

async function getInterveiwTime(
  callback: (success: boolean, params?: Array<Schedule>) => void
): Promise<void> {
  try {
    const request_confg = {
      headers: {
        'x-access-key': process.env.REACT_APP_FIREBASE_API_KEY,
      },
    };

    const res = await axios.get(ENDPOINT_INTERVIEW, request_confg);

    const {schedule_list} = res.data;

    callback(true, schedule_list);
  } catch (err) {
    const {message} = err.response.data;
    alert(message);
    callback(false);
  }
}

export default getInterveiwTime;
