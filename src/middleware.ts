import { defineMiddleware } from "astro:middleware";

const privateRoutes = ["/protected", "/profile"];

export const onRequest = defineMiddleware((context, next) => {

  const { url, request } = context;
  
  const authHeaders = request.headers.get('authorization') ?? '';
  
  if (privateRoutes.includes(url.pathname)) {
    null;
  }

  return next();
});
