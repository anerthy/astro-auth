declare namespace App {
  
  interface User {
    email: string;
    name: string;
    avatar: string;
    emailVerified: boolean;
  }
  
  interface Locals {
    isLoggedIn: boolean;
    user: User | null;
  }
}

interface ImportMetaEnv {
  readonly WEBSITE_URL: string;
  readonly FIREBASE_API_KEY: string;
  readonly FIREBASE_AUTH_DOMAIN: string;
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_STORAGE_BUCKET: string;
  readonly FIREBASE_MESSAGING_SENDER_ID: string;
  readonly FIREBASE_APP_ID: string;
  readonly FIREBASE_MEASUREMENT_ID: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
