import { GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

// Create the Apple Auth provider
export const appleProvider = new OAuthProvider('apple.com');

// Create the Google Auth provider
export const googleProvider = new GoogleAuthProvider();