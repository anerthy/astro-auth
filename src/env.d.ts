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