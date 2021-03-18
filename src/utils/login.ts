import firebase from 'firebase/app';
import 'firebase/auth';

async function login(
  email: string,
  password: string,
  callback: (success: boolean, params?: string) => void,
): Promise<void> {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    await firebase.auth().signInWithEmailAndPassword(email, password);
    callback(true);
  } catch (err) {
    let message = '';

    switch (err.code) {
    case 'auth/wrong-password':
      message = '잘못된 비밀번호입니다.';
      break;
    case 'auth/user-not-found':
      message = '잘못된 비밀번호입니다.';
      break;
    default:
      message = '오류가 발생했습니다.';
    }

    callback(false, message);
  }
}

export default login;
