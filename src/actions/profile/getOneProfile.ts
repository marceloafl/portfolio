import { cookies } from "next/headers";
import getProfileById from "../../app/services/profile-api";
import getAuthToken from "@/utils/getAuthToken";

export default async function getOneProfile(profileId: string) {
  const token = getAuthToken();

  const profile = await getProfileById(profileId, token);
  return profile;
}
