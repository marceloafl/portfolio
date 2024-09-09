"use client";

import MainBanner from "@/components/banner/MainBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import List from "@/components/list/List";
import Skills from "@/components/list/Skills";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { listItems } from "./data";

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
