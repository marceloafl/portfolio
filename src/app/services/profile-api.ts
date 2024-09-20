import { IProfile } from "@/types/profiles";

const url = "http://localhost:8081/v1/profiles";

const marceloProfile: IProfile = {
  name: "string",
  email: "string",
  githubUrl: "string",
  linkedinUrl: "string",
  title: "string",
  subtitle: "string",
  projects: [],
  skills: [],
};
export default async function getProfileById(id: string, token: string) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
