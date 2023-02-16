import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HeroComponent = () => {
  return (
    <Box as="main">
      <HStack
        backgroundImage={"/images/8296016.webp"}
        backgroundSize="contain"
        py={"10"}
      >
        <Box w={"50%"} pl="10">
            <Heading as={"h1"} color="white" fontSize={"72"}>
              Build your next idea even faster
            </Heading>
            <Text color={"white"} fontSize={"18px"} mt="4" lineHeight={"8"}>
              One Year Panaverse DAO Earn as you Learn Program. Consolidating
              Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
              Ambient Computing/IoT Technologies
            </Text>
            <HStack spacing={2} mt={4}>
              <Button colorScheme={"blue"}>Buy Now</Button>
              <Button colorScheme={"blue"} variant="outline">
                View Components
              </Button>
            </HStack>
            {/* Built in component from ChakraUI */}
            <AvatarGroup size="md" max={3} mt="3">
              <Avatar name="Zia Khan" src="/images/zia-khan.jpg" />
              <Avatar name="Zeeshan Hanif" src="/images/zeeshan-hanif.jpg" />
              <Avatar name="Hira Khan" src="/images/hira-khan.jpg" />
              <Avatar name="Daniyal Nagori" src="/images/daniyal-nagori.jpg" />
              <Avatar name="Adil Altaf" src="/images/adil-altaf.jpg" />
              <Avatar name="Sohail Ishaque" src="/images/sohail.jpg" />
            </AvatarGroup>
        </Box>
        <Box w={"50%"} pl='10'>
          <Image src="/images/banner5.png" />
        </Box>
      </HStack>
    </Box>
  );
};

export default HeroComponent;
