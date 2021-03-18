import firebase from 'firebase/app';
import 'firebase/auth';

function checkAuth(callback: (is_authenticated: boolean) => void): void {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(true);
    } else {
      callback(false);
    }
  });
}

export default checkAuth;
