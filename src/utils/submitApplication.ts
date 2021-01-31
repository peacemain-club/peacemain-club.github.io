import axios from 'axios';

import {ENDPOINT_SUBMIT} from 'configs/api';

interface Application {
  name: string,
  interest: string,
  major: string,
  phone: string,
  birth_year: string,
  email: string,
  is_male: boolean,
  application_statement: string,
  portfolio_url: string,
}

async function submitApplication(
  props: Application,
  callback: (success: boolean) => void
): Promise<void> {
  try {
    const request_confg = {
      headers: {
        'x-access-key': process.env.REACT_APP_FIREBASE_API_KEY,
      },
    };

    const res = await axios.post(ENDPOINT_SUBMIT, props, request_confg);

    if (res.status !== 200) {
      throw new Error('fail to submit');
    }

    callback(true);
  } catch (err) {
    callback(false);
  }
}

export default submitApplication;
