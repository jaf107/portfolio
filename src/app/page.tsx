// src/app/page.tsx
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import ContactButton from "@/components/ContactButton"; // ✅ Import the Client Component

export default function Home() {
  return (
    <Box
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={6} textAlign="center">
        <Heading as="h1" size="2xl">
          Abu Jafar Saifullah
        </Heading>
        <Text fontSize="xl">
          Software Engineer | Researcher | Aspiring PhD Student
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={4}>
          <ContactButton /> {/* ✅ Uses the new Client Component */}
        </Stack>
      </Stack>
    </Box>
  );
}
