import { IProfile } from "@/types/profiles";

const url = "http://localhost:8081/v1/auth/login";

const mockedProfile: IProfile = {
  name: "Marcelo Lemes",
  email: "marceloaflemes@gmail.com",
  githubUrl: "http://github.com/marceloafl",
  linkedinUrl: "http://linkedin.com/in/marceloafl/",
  title: "Software Developer",
  subtitle: "Crafting transformative solutions that solve real-world issues.",
  projects: [
    {
      name: "Birmingham Bank",
      url: "http://www.birminghambank.com/",
      stack: "Frontend",
    },
    {
      name: "Grupo FCamara",
      url: "http://fcamara.com/",
      stack: "Fullstack",
    },
    {
      name: "Rhopen",
      url: "http://rhopen.com.br/",
      stack: "Frontend",
    },
    {
      name: "Café Cajubá",
      url: "http://cafecajuba.com.br/",
      stack: "Low-code",
    },
    {
      name: "Munchkin",
      url: "http://munchkin.com.br/",
      stack: "Low-code",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Storybook",
    "SEO",
    "HTML",
    "CSS",
    "Tailwind",
    "Styled-components",
    "Module CSS",
    "Bootstrap",
    "Material-UI",
    "Node.js",
    "Express",
    "C#",
    ".NET",
    "API Rest",
    "Git",
    "Vitest",
    "Jest",
    "React Testing Library",
    "AWS",
    "Azure",
    "SQL",
    "Google Analytics",
    "Mendix",
  ],
};

export default async function userLoginRequest(
  email: string,
  password: string
) {
  return { data: mockedProfile, status: 200 };
  // try {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   const status = response.status;
  //   const data = await response.json();
  //   return { data, status };
  // } catch (error) {
  //   console.error(error);
  // }
}
