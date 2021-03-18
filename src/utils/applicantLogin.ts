import axios from 'axios';

import createAccessToken from 'utils/createAccessToken';

import {ENDPOINT_LOGIN} from 'configs/api';

interface Props {
  name: string,
  phone: string,
}

async function applicantLogin(
  params: Props,
  callback: (success: boolean, params: string) => void
): Promise<void> {
  try {
    const request_confg = {
      headers: {
        'x-access-token': createAccessToken(),
      },
      params: {
        name: params.name,
        phone: params.phone,
      },
    };

    const res = await axios.get(ENDPOINT_LOGIN, request_confg);

    const {uid} = res.data;

    callback(true, uid);
  } catch (err) {
    const {message} = err.response.data;
    alert(message);
    callback(false, '');
  }
}

export default applicantLogin;
