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
      <body className={nunito.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Mahmut İÇME | Portfolio",
  description: "Front-End Software Developer",
  authors: {
    name: "Mahmut İÇME",
    url: "https://github.com/",
  },
  keywords: ["Mahmut İÇME"],
  icons: {
    icon: "/",
    shortcut: "",
  },
  alternates: {
    canonical: "/",
  },

  openGraph: {
    siteName: "Mahmut İÇME's Portfolio",
    title: "Mahmut İÇME | Portfolio",
    description: "Front-End Software Developer",
    locale: "en_US",
    type: "website",
    url: "/",
    images: {
      url: "",
      alt: "",
      width: 240,
      height: 240,
    },
  },
};
