"use client";
import CTA from "@/components/cta";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HeroComponent from "@/components/HeroComponent";
import HighlightSection from "@/components/HighlightSection";
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
  <Features />
  <CTA />
  <HighlightSection />
  </Box>
}
