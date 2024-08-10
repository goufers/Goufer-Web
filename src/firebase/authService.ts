import { getAuth, signInWithPopup, AuthProvider, User } from 'firebase/auth';
import app from './firebaseConfig';

const socialMediaAuth = async (provider: AuthProvider): Promise<User | null> => {
  try {
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default socialMediaAuth;
