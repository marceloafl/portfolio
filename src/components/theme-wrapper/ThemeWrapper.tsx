"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { ReactNode, useContext } from "react";

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "bg-white text-black" : "bg-dark-gray text-white"
      }
    >
      {children}
    </div>
  );
}
