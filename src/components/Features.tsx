import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiRocket } from "react-icons/bi";
import { HiOutlineStar } from "react-icons/hi";
import { RiMoonFoggyLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { TfiReddit } from "react-icons/tfi";

const Features = () => {
  return (
    <Box my={"50"} as="section">
      {/* Top Content */}
      {/* <Center flexDirection={"column"} textAlign='center'> */}
      <Stack spacing={"4"} flexDirection="column" align={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"21"}>
          A bundle of 220+ ready-to-use, responsive and accessible components
          with clever structured sourcecode files.
        </Text>
      </Stack>
      {/* </Center> */}
      <SimpleGrid column={"2"} spacing={"2"} mt={"8"} ml="10">
        <HStack spacing={"20"} ml="8" my={"4"}>
          {/* First component */}
          <HStack>
            <Box color={"blue.500"}>
              <HiOutlineStar size={"40"} />
            </Box>
            <Box>
              <Text fontSize={"20"} fontWeight="semibold">
                220+ Components
              </Text>
              <Text fontSize={"16"}>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>

          {/* Second component */}
          <HStack>
            <Box color={"blue.500"}>
              <BiRocket size="40" />
            </Box>
            <Box>
              <Text fontSize={"20"} fontWeight="semibold">
                Themable
              </Text>
              <Text fontSize={"16"}>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
        </HStack>

        <HStack spacing={"20"} ml="8" my={"4"}>
          {/* Third component */}
          <HStack>
            <Box color={"blue.500"}>
              <RiMoonFoggyLine size={"40"} />
            </Box>
            <Box>
              <Text fontSize={"20"} fontWeight="semibold">
                Light & Dark
              </Text>
              <Text fontSize={"16"}>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>

          {/* Fourth component */}
          <HStack>
            <Box color={"blue.500"}>
              <FaPaintBrush size={"40"} />
            </Box>
            <Box>
              <Text fontSize={"20"} fontWeight="semibold">
                Themable
              </Text>
              <Text fontSize={"16"}>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
        </HStack>

        <HStack spacing={"20"} ml="8" my={"4"}>
          {/* Fifth component */}
          <HStack>
            <Box color={"blue.500"}>
              <SiVisualstudiocode size={"40"} />
            </Box>
            <Box>
              <Text fontSize={"20"} fontWeight="semibold">
                Developer Friendly
              </Text>
              <Text fontSize={"16"}>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>

          {/* Sixth component */}
          <HStack>
            <Box color={"red.500"}>
              <TfiReddit size={"40"} />
            </Box>
            <Box>
              <Text fontSize={"20"} fontWeight="semibold">
                Accessible
              </Text>
              <Text fontSize={"16"}>
                All our components come with a light and dark color mode by
                default.
              </Text>
            </Box>
          </HStack>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};

export default Features;
