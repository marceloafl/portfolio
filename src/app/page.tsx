"use client";

import MainBanner from "@/components/banner/MainBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import List from "@/components/list/List";
import Skills from "@/components/list/Skills";
import { ThemeContext } from "@/contexts/ThemeContext";

import { useContext } from "react";

export interface ListItem {
  title: string;
  href: string;
  id: number;
  stack: "Frontend" | "Backend" | "Fullstack" | "Low-code";
}

const listItems: ListItem[] = [
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

export default function Page() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? "bg-white text-black" : "bg-dark-gray text-white"
      }
    >
      <div className="max-w-3xl mx-auto p-3">
        <Header />
        <main>
          <MainBanner />
          <List items={listItems} />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}
