import jwt, {Secret} from 'jsonwebtoken';

function createAccessToken(): string {
  const private_key: Secret = process.env.REACT_APP_PRIVATE_KEY || '';
  const token = jwt.sign({type: 'x-access-token'}, private_key, {
    expiresIn: 60,
  });

  return token;
}

export default createAccessToken;
