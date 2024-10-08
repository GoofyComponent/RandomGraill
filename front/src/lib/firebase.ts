// firebase.js
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

import { DB_NAME, FIREBASE_CONFIG } from '../../firebaseCredentials.ts';

const app = initializeApp(FIREBASE_CONFIG);

export const analytics = getAnalytics(app); //How to register events: logEvent(analytics, 'the_event');
export const db = getFirestore(app, DB_NAME ?? '(default)');
export const functions = getFunctions(app);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

if (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'
) {
  connectFunctionsEmulator(functions, '127.0.0.1', 5001);
}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw new Error(`Erreur lors de la connexion avec Google: ${error}`);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(`Erreur lors de la déconnexion: ${error}`);
  }
};
