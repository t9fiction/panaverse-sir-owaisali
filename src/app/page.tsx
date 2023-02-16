"use client";
import Header from "@/components/Header";
import HeroComponent from "@/components/HeroComponent";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Box>
  <Header />
  <HeroComponent />
  </Box>
}
