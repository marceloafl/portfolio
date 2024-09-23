import { permanentRedirect } from "next/navigation";
import getAuthToken from "./getAuthToken";
import jwt from "jsonwebtoken";

export default function checkProtectedRoutes() {
  const token = getAuthToken();
  if (!token) {
    permanentRedirect("/");
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    permanentRedirect("/");
  }
}
