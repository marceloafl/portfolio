import { IProfile } from "@/types/profiles";

const url = "http://localhost:8081/v1/profiles";

export async function getProfileByIdRequest(id: string) {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateProfileRequest(
  id: string,
  token: string,
  updatedProfile: IProfile
) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
