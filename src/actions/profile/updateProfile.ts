"use server";

import { updateProfileRequest } from "@/services/profile-api";
import { IProfile } from "@/types/profiles";
import getAuthToken from "@/utils/getAuthToken";

export default async function updateOneProfile(
  profileId: string,
  updatedProfile: IProfile
) {
  const token = getAuthToken();

  const profile = await updateProfileRequest(profileId, token, updatedProfile);
  return profile;
}
