import { permanentRedirect } from "next/navigation";
import getAuthToken from "./getAuthToken";

export default function checkProtectedRoutes() {
  const token = getAuthToken();
  if (!token) {
    permanentRedirect("/");
  }
}
