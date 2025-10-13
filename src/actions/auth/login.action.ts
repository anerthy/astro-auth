
import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { signInWithEmailAndPassword, type AuthError } from "firebase/auth";

const EXPIRES_IN = 1000 * 60 * 60 * 24 * 265;

export const loginUser = defineAction({
  accept: 'form',
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
    remember_me: z.boolean().optional(),
  }),
  handler: async ({ email, password, remember_me }, { cookies }) => {
    
    try {
      const userCredential = await signInWithEmailAndPassword(firebase.auth, email, password);
      
      cookies.delete("email", { path: "/" });
      if (remember_me) {
        cookies.set("email", email, {
          httpOnly: true,
          expires: new Date(Date.now() + EXPIRES_IN),
          path: "/",
        });
      }
      return { ok: true, message: "User logged in successfully" };

    } catch (error) {

      const firebaseError = error as AuthError;
      if (firebaseError.code === 'auth/invalid-credential') {
        throw new Error('Wrong credentials');
      }

      console.log(error);
      throw new Error('Invalid email or password');
    }
    
  },
});