import { getProfileByIdRequest } from "../../services/profile-api";
import getAuthToken from "@/utils/getAuthToken";

export default async function getOneProfile(profileId: string) {
  const token = getAuthToken();

  const profile = await getProfileByIdRequest(profileId, token);
  return profile;
}
