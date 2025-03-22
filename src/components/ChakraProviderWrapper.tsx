"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ChakraProviderWrapper = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
