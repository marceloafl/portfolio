export const stacks = ["Frontend", "Backend", "Fullstack", "Low-code"] as const;
export type Stack = (typeof stacks)[number];

export interface IProject {
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
