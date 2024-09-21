import { getProfileByIdRequest } from "../../services/profile-api";

export default async function getOneProfile(profileId: string) {
  const profile = await getProfileByIdRequest(profileId);
  return profile;
}
