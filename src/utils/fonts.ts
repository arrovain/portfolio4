"use client";
import { Nunito } from "next/font/google";

const NunitoFonts = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["vietnamese"],
  display: "swap",
});

// @exports
export default NunitoFonts;
