// src/app/layout.tsx
import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Abu Jafar Saifullah - Portfolio",
  description: "Software Engineer | Researcher | Aspiring PhD Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
