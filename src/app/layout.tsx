"use client";
import "./globals.css";
import { Metadata } from "next";
import NunitoFonts from "../utils/fonts";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { motion } from "framer-motion";

const nunito = NunitoFonts;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="assets/tech_logos/javascript.svg"
          type="image/x-icon"
        />
        <title>M. İÇME</title>
        <meta name="description" content="Description" />
      </head>
      <body className={nunito.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
