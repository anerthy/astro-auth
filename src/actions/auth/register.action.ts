import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";

const EXPIRES_IN = {
  YEAR: 1000 * 60 * 60 * 24 * 265,
  MONTH: 60 * 60 * 24 * 30,
};

export const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    password: z.string().min(6),
    remember_me: z.boolean().optional(),
  }),
  handler: async (input, context) => {
    const { name, email, password, remember_me } = input;
    const { cookies } = context;

    if (remember_me) {
      cookies.set("email", email, {
        httpOnly: true,
        expires: new Date(Date.now() + EXPIRES_IN.MONTH),
        path: "/",
      });
    } else {
      cookies.delete("email", { path: "/" });
    }

    try {
      
      await createUserWithEmailAndPassword(firebase.auth, email, password);

      //guardar el nombre en el perfil

      //verificar el correo electronico

      return { ok: true, message: "User registered successfully" };

    } catch (error) {

      const firebaseError = error as AuthError;

      if (firebaseError.code === 'auth/email-already-in-use') {
        throw new Error("Email is already in use");
      }

      console.log(error);
      throw new Error('Something went wrong, please try again later.');
    }

  },
});