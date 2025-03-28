import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

export default function ResearchPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <Heading>My Research</Heading>
      <Text mt={2}>
        I am passionate about Software Engineering, AI, and Human-Computer
        Interaction (HCI). Below are some of my research works.
      </Text>
      <VStack spacing={6} align="start" mt={4}>
        <Box>
          <Heading size="md">Paper Title 1</Heading>
          <Text>Published in XYZ Conference 2024</Text>
          <Link href="https://your-paper-link.com" color="blue.500" isExternal>
            Read Paper
          </Link>
        </Box>
        <Box>
          <Heading size="md">Paper Title 2</Heading>
          <Text>Ongoing Research on Topic XYZ</Text>
        </Box>
      </VStack>
    </main>
  );
}
