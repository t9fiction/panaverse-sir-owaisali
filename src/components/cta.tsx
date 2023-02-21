import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CTA = () => {
  return (
    <Box >
      <Container maxW={'1200'} bgColor={'blue.100'} py={'10'} rounded={'10'} mx='20'>
        <HStack>
          <Heading>Try our free components</Heading>
          <Spacer />
          <Box pr={'4'}>

          <Button colorScheme={"blue"} variant="solid">
            View Components
          </Button>
          </Box>
        </HStack>
        <Box w={'70%'}>
        <Text mt={'4'} fontSize={'24'}>
          You don&apos;t have to buy a pig in a poke - you can experience our
          free community components before making a purchase decision.
        </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
