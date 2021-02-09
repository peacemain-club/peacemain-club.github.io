import axios from 'axios';

import {ENDPOINT_INTERVIEW} from 'configs/api';

interface Interview {
  time_want: string,
  uid: string,
}

async function submitInterviewTime(
  params: Interview,
  callback: (success: boolean) => void,
): Promise<void> {
  try {
    const request_confg = {
      headers: {
        'x-access-key': process.env.REACT_APP_FIREBASE_API_KEY,
      },
    };

    await axios.post(ENDPOINT_INTERVIEW, params, request_confg);

    callback(true);
  } catch (err) {
    const {message} = err.response.data;
    alert(message);
    callback(false);
  }
}

export default submitInterviewTime;
