import { Box, Container, Heading, Text, Input, Button, VStack, HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState([]);
  const toast = useToast();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() === "") {
      toast({
        title: "Error",
        description: "Input can't be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    // This is where you would handle the API call to the GPT-3
    // Since we can't make actual API calls, we'll just simulate a response
    const newResponse = {
      question: input,
      answer: "This is a simulated response. GPT Engineer Clone at your service!",
    };
    setResponses([newResponse, ...responses]);
    setInput("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading>GPT Engineer Clone</Heading>
          <Text mt={4}>Ask me anything, and I'll provide you with an AI-generated answer.</Text>
        </Box>

        <Box w="100%">
          <VStack spacing={4}>
            <HStack w="100%">
              <Input placeholder="Type your question here..." value={input} onChange={handleInputChange} size="lg" />
              <Button onClick={handleSubmit} colorScheme="blue" size="lg">
                <FaRobot />
              </Button>
            </HStack>
            {responses.map((response, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" w="100%">
                <Heading size="md">Q: {response.question}</Heading>
                <Text mt={4}>A: {response.answer}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
