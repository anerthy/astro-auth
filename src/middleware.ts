import { defineMiddleware } from 'astro:middleware';
import { firebase } from './firebase/config';

const privateRoutes = ['/protected'];

export const onRequest = defineMiddleware(({ locals }, next) => {

  const isLoggedIn = !!firebase.auth.currentUser;
  const user = firebase.auth.currentUser;

  locals.isLoggedIn = isLoggedIn;
  if (user){
    locals.user = {
      email : user.email!,
      name : user.displayName!,
      avatar : user.photoURL ?? '', 
      emailVerified : user.emailVerified
    };
  }

  return next();
});
