import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { DB_NAME, FIREBASE_CONFIG } from '../../firebaseCredentials.ts';

const app = initializeApp(FIREBASE_CONFIG);

export const analytics = getAnalytics(app); //How to register events: logEvent(analytics, 'the_event');
export const db = getFirestore(app, DB_NAME ?? '(default)');

export default app;
