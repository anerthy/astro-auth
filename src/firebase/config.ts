import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

if (!import.meta.env.FIREBASE_API_KEY ) throw new Error('Missing FIREBASE_API_KEY in environment variables');
if (!import.meta.env.FIREBASE_AUTH_DOMAIN ) throw new Error('Missing FIREBASE_AUTH_DOMAIN in environment variables');
if (!import.meta.env.FIREBASE_PROJECT_ID ) throw new Error('Missing FIREBASE_PROJECT_ID in environment variables');
if (!import.meta.env.FIREBASE_STORAGE_BUCKET ) throw new Error('Missing FIREBASE_STORAGE_BUCKET in environment variables');
if (!import.meta.env.FIREBASE_MESSAGING_SENDER_ID ) throw new Error('Missing FIREBASE_MESSAGING_SENDER_ID in environment variables');
if (!import.meta.env.FIREBASE_APP_ID ) throw new Error('Missing FIREBASE_APP_ID in environment variables');
if (!import.meta.env.FIREBASE_MEASUREMENT_ID ) throw new Error('Missing FIREBASE_MEASUREMENT_ID in environment variables');

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
  app,
  auth
};