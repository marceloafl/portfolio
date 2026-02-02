import { IProfile } from "@/types/profiles";

const url = "http://localhost:8081/v1/profiles";

const mockedProfile: IProfile = {
  name: "Marcelo Lemes",
  email: "marceloaflemes@gmail.com",
  githubUrl: "http://github.com/marceloafl",
  linkedinUrl: "http://linkedin.com/in/marceloafl/",
  title: "Software Developer",
  subtitle: "Crafting transformative solutions that solve real-world issues.",
  projects: [
    {
      name: "MySide",
      url: "https://myside.com.br/",
      stack: "Frontend",
    },
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
    {
      name: "Other projects (Github)",
      url: "https://github.com/marceloafl?tab=repositories",
      stack: "Fullstack",
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

export async function getProfileByIdRequest(id: string) {
  return mockedProfile;
  // try {
  //   const response = await fetch(`${url}/${id}`);
  //   const data = await response.json();

  //   return data;
  // } catch (error) {
  //   console.error(error);
  // }
}

export async function updateProfileRequest(
  id: string,
  token: string,
  updatedProfile: IProfile
) {
  return mockedProfile;
  // try {
  //   const response = await fetch(`${url}/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedProfile),
  //   });
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error(error);
  // }
}
