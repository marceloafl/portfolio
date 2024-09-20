const stacks = ["Frontend", "Backend", "Fullstack", "Low-code"] as const;
type Stack = (typeof stacks)[number];

interface IProject {
  name: string;
  url: string;
  stack: Stack;
}

export interface IProfile {
  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  title: string;
  subtitle: string;
  projects: IProject[];
  skills: string[];
}
