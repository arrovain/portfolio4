"use client";
import Image from "next/image";
import Stats from "@/components/proficiency/Skills";
import About from "@/components/about/About";
import SocialMedia from "@/components/social/SocialMedia";
import Intro from "@/components/intro/Intro";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Stats />
      <Projects />
      <SocialMedia />
      <Footer />
    </>
  );
}
