import { registerUser } from "./auth";
import { logoutUser } from "./auth/logout.action";

export const server = {
  registerUser,
  logoutUser
}