"use client";

import React from "react";
import StyledComponentsRegistry from "./registry";
import Body from "../src/components/Body";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <Body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Body>
    </html>
  );
}
