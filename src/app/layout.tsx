import "./globals.css";
import { Metadata } from "next";
import NunitoFonts from "../../utils/fonts";
import { GoogleAnalytics } from "../../components/components";
import {
  OFFICIAL_AUTHOR_URL,
  OFFICIAL_OG_IMAGE_URL,
  OFFICIAL_PLATOFORM_TWITTER_URL,
  OFFICIAL_TWITTER_IMAGE_URL,
} from "@/utils/constants";

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
  title: "Quiet Node | Portfolio",
  description: "Front-End Software Developer",
  authors: {
    name: "Mahmut İÇME",
    url: OFFICIAL_PLATOFORM_TWITTER_URL,
  },
  keywords: ["Mahmut İÇME", ,],
  icons: {
    icon: "/",
    shortcut: "",
  },
  metadataBase: new URL(OFFICIAL_AUTHOR_URL),
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
      url: OFFICIAL_OG_IMAGE_URL,
      alt: "",
      width: 240,
      height: 240,
    },
  },

  twitter: {
    card: "summary_large_image",
    site: OFFICIAL_AUTHOR_URL,
    creator: "@quiet_node",
    creatorId: "1525316662429360131",
    title: "Quiet Node | Portfolio",
    description:
      "Full-stack Web 3.0 Software Developer | DLT Enthusiast | Junior Smart Contract Developer",
    images: {
      url: OFFICIAL_TWITTER_IMAGE_URL,
      alt: "Syns Platform Social Image",
      width: 120,
      height: 120,
    },
  },
};
