export interface ListItem {
  title: string;
  href: string;
  id: number;
  stack: "Frontend" | "Backend" | "Fullstack" | "Low-code";
}

export const listItems: ListItem[] = [
  {
    id: 1,
    title: "Birmingham Bank",
    href: "https://www.birminghambank.com/",
    stack: "Frontend",
  },
  {
    id: 2,
    title: "Grupo FCamara",
    href: "https://fcamara.com/",
    stack: "Fullstack",
  },
  {
    id: 3,
    title: "Rhopen",
    href: "https://rhopen.com.br/",
    stack: "Frontend",
  },
  {
    id: 4,
    title: "Café Cajubá",
    href: "https://cafecajuba.com.br/",
    stack: "Low-code",
  },
  {
    id: 5,
    title: "Munchkin",
    href: "https://munchkin.com.br/",
    stack: "Low-code",
  },
];
