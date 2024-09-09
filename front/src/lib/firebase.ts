//import { getAnalytics } from 'firebase/analytics';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { DB_NAME, FIREBASE_CONFIG } from '../../firebaseCredentials.ts';

const app = initializeApp(FIREBASE_CONFIG);

export const analytics = getAnalytics(app); //How to register events: logEvent(analytics, 'the_event');
export const db = getFirestore(app, DB_NAME ?? '(default)');
//export const functions = getFunctions(app);

// Connect to the Firebase Emulator if running locally else use the production services
/* if (window.location.hostname === 'localhost') {
  connectFunctionsEmulator(functions, 'localhost', 5001);
} */

export default app;
