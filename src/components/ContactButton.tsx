"use client"; // ✅ Marks this as a Client Component

import { Button } from "@chakra-ui/react";

const ContactButton = () => {
  return (
    <Button
      colorScheme="teal"
      size="lg"
      onClick={() => (window.location.href = "/contact")}
    >
      Contact Me
    </Button>
  );
};

export default ContactButton;
