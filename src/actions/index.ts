import { loginUser, registerUser, logoutUser, loginWithGoogle } from "./auth";

export const server = {
  registerUser,
  loginUser,
  loginWithGoogle,
  logoutUser,
}