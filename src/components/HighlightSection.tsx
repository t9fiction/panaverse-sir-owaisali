import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import {GiReceiveMoney} from 'react-icons/gi'
import {AiTwotoneSetting} from 'react-icons/ai'
import {RiCustomerService2Fill} from 'react-icons/ri'

const HighlightSection = () => {
  return (
    <Box my={"50"}>
      <Stack spacing={"4"} flexDirection="column" align={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Highlights
        </Text>
        <Heading fontWeight={"semibold"}>Why us?</Heading>
        <Text fontSize={"21"}>
          Because these beautiful and responsive React components will help you
          realize your next idea in no time.
        </Text>
      </Stack>
      <Stack mx="20">
        <HStack spacing={'10'}>

          <Card align="center">
            <Box mt="10" color={"blue.500"}>
              <IoIosSpeedometer size={"60"} />
            </Box>
            <CardHeader>
              <Heading size="md">Speed up workflow</Heading>
            </CardHeader>
            <CardBody>
              <Text align={'center'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          
          <Card align="center">
            <Box mt="10" color={"blue.500"}>
              <GiReceiveMoney size={"60"} />
            </Box>
            <CardHeader>
              <Heading size="md">Save good money</Heading>
            </CardHeader>
            <CardBody>
              <Text align={'center'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <Box mt="10" color={"blue.500"}>
              <AiTwotoneSetting size={"60"} />
            </Box>
            <CardHeader>
              <Heading size="md">Easily customizable</Heading>
            </CardHeader>
            <CardBody>
              <Text align={'center'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <Box mt="10" color={"blue.500"}>
              <RiCustomerService2Fill size={"60"} />
            </Box>
            <CardHeader>
              <Heading size="md">Support Us</Heading>
            </CardHeader>
            <CardBody>
              <Text align={'center'}>
                Quickly put together different components to create an nearly
                infinite combination of user experiences.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
        </HStack>
      </Stack>
    </Box>
  );
};

export default HighlightSection;
