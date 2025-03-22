"use client";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7c948",
      200: "#f0b429",
      300: "#de911d",
      400: "#cb6e17",
      500: "#b44d12",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
});

export default theme;
