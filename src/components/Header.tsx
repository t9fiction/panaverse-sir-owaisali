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
import Link from "next/link";

const Header = () => {

  
  return (
    <Box ml={1}>
      <HStack my={"2"}>
        <Image src="/images/Logo.webp" w={"30"} alt='logo' />
        <List>
          <HStack
            spacing={{ sm: "2", md: "5", lg: "20", xl: "30" }}
            ml={{ sm: "2", md: "5", lg: "20", xl: "30" }}
            fontWeight="bold"
          >
            <Link href={"/"}>
              <ListItem>HOME</ListItem>
            </Link>
            <Link href={"#"}>
              <ListItem>MISSION</ListItem>
            </Link>
            <Link href={"#"}>
              <ListItem>ABOUT US</ListItem>
            </Link>
          </HStack>
        </List>
        <Spacer />
        <HStack spacing={"10"}>
          <SearchIcon />
          <MoonIcon />
          <Link href={'https://www.piaic.org/'}>
          <Button variant={"ghost"}>Go to PIAIC</Button>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;

