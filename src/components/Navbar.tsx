"use client"; // This ensures it's a Client Component

import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box as="nav" bg="teal.500" color="white" py={3} px={6}>
      <Flex justify="space-between" align="center">
        <Link as={NextLink} href="/" fontSize="xl" fontWeight="bold">
          Abu Jafar Saifullah
        </Link>
        <Flex gap={4}>
          <Link as={NextLink} href="/about">
            About
          </Link>
          <Link as={NextLink} href="/projects">
            Projects
          </Link>
          <Link as={NextLink} href="/research">
            Research
          </Link>
          <Link as={NextLink} href="/contact">
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
