import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD_W_L8cXNB9fyoWlD2pdocA9K3oFEe-0",
  authDomain: "astro-authentication-bea00.firebaseapp.com",
  projectId: "astro-authentication-bea00",
  storageBucket: "astro-authentication-bea00.firebasestorage.app",
  messagingSenderId: "1039912122755",
  appId: "1:1039912122755:web:a952f6907e5f50033c5eb6",
  measurementId: "G-YWJGR6WZ1G"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
  app,
  auth
};