import {
  //   Box,
  Button,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <Heading>Contact Me</Heading>
      <VStack spacing={4} mt={4}>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="teal">Send Message</Button>
      </VStack>
    </main>
  );
}
