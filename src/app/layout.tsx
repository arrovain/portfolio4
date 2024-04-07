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
        <title>Portfolio</title>
        <meta name="description" content="Description" />
      </head>
      <body className={nunito.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
