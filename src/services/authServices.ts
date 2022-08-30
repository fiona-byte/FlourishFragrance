import { auth, db, provider } from '../config';
import { doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

type registerPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type signInPayload = {
  email: string;
  password: string;
};

export const authServices = {
  async register({ firstName, lastName, email, password }: registerPayload) {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        let userId = response.user.uid;
        setDoc(doc(db, 'users', userId), { firstName, lastName });
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async login({ email, password }: signInPayload) {
    return await signInWithEmailAndPassword(auth, email, password);
  },
  async authWithGoogle() {
    return await signInWithPopup(auth, provider)
      .then((response) => {
        const credential = GoogleAuthProvider.credentialFromResult(response);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = response.user;
        return user;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
  async logout() {
    signOut(auth);
  },
};
