
import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

export const loginWithGoogle = defineAction({
  accept: 'json',
  input: z.any(),
  handler: async (credentials) => {
    const googleCredentials = GoogleAuthProvider.credentialFromResult(credentials);

    if (!googleCredentials) {
      throw new Error('Failed to obtain Google credentials');
    }

    await signInWithCredential(firebase.auth, googleCredentials);

    return { ok: true, message: "User logged in with Google successfully" };

  },
});