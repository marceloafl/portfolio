import { cookies } from "next/headers";
import getProfileById from "../../app/services/profile-api";

export default async function getOneProfile(profileId: string) {
  const token = cookies().get("authToken").value;

  const profile = await getProfileById(profileId, token);
  return profile;
}
