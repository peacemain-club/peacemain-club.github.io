import axios from 'axios';

import {ENDPOINT_LOGIN} from 'configs/api';

interface Props {
  name: string,
  phone: string,
}

async function login(
  params: Props,
  callback: (success: boolean, params: string) => void
): Promise<void> {
  try {
    const request_confg = {
      headers: {
        'x-access-key': process.env.REACT_APP_FIREBASE_API_KEY,
      },
      params: {
        name: params.name,
        phone: params.phone,
      },
    };

    const res = await axios.get(ENDPOINT_LOGIN, request_confg);

    if (res.status !== 200) {
      const error = new Error(res.data.code);
      error.message = res.data.message;
      throw error;
    }

    const {uid} = res.data;

    callback(true, uid);
  } catch (err) {
    alert(err.message);
    callback(false, '');
  }
}

export default login;
