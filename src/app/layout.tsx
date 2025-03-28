// src/app/layout.tsx
import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

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
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
