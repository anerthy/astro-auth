
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const EXPIRES_IN = {
  YEAR: 1000 * 60 * 60 * 24 * 265,
  MONTH: 60 * 60 * 24 * 30
}; 

export const registerUser = defineAction({
  accept: 'form',
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
      cookies.set('email', email, { 
        httpOnly: true,
        expires: new Date(Date.now() + EXPIRES_IN.MONTH),
        path: '/',
      });
    } else {
      cookies.delete('email', { path: '/' });
    }

    return {ok: true, message: 'User registered successfully'};
  },
});