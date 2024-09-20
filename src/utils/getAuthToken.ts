import { cookies } from "next/headers";

export default function getAuthToken() {
  const cookie = cookies().get("authToken");
  return cookie ? cookie.value : null;
}
