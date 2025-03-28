import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export default function ProjectsPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <Heading>My Projects</Heading>
      <VStack spacing={6} align="start" mt={4}>
        <Box>
          <Heading size="md">Monopoly Deal Web App</Heading>
          <Text>A multiplayer web game built with React & Firebase.</Text>
        </Box>
        <Box>
          <Heading size="md">Finance Management App</Heading>
          <Text>AI-powered finance tracking with smart automation.</Text>
        </Box>
      </VStack>
    </main>
  );
}
