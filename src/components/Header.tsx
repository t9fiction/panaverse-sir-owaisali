"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const Header = () => {
  return (
    <Box ml={1}>
      <HStack my={'2'}>
        <Image src="/images/Logo.webp" w={'30'}  />
        <List>
          <HStack
            spacing={{ sm: "2", md: "5", lg: "20", xl: "30" }}
            ml={{ sm: "2", md: "5", lg: "20", xl: "30" }}
            fontWeight="bold"
          >
            <ListItem>Home</ListItem>
            <ListItem>Contact</ListItem>
            <ListItem>About</ListItem>
          </HStack>
        </List>
        <Spacer />
        <HStack spacing={"10"}>
          <SearchIcon />
          <MoonIcon />
          <Button variant={"ghost"}>Go to PIAIC</Button>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Header