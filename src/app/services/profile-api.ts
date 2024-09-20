const stacks = ["Frontend", "Backend", "Fullstack", "Low-code"] as const;
type Stack = (typeof stacks)[number];

interface IProject {
  name: string;
  url: string;
  stack: Stack;
}

interface IProfile {
  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  title: string;
  subtitle: string;
  projects: IProject[];
  skills: string[];
}

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

export default async function getProfileInfo() {
  try {
    const response = await fetch("");
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
