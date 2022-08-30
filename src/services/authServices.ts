import { auth, db } from '../config';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

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
    return await createUserWithEmailAndPassword(auth, email, password).then((response) => {
      let userId = response.user.uid;
      setDoc(doc(db, 'users', userId), { firstName, lastName });
      return response;
    });
  },
  async login({ email, password }: signInPayload) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  },
  async logout() {
    signOut(auth);
  },
};
