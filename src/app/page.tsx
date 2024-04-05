"use client";
import Image from "next/image";
import About from "@/components/about/About";
import SocialMedia from "@/components/social/SocialMedia";
import Intro from "@/components/intro/Intro";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <SocialMedia />
    </>
  );
}
