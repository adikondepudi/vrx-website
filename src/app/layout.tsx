import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VRx: A New Standard for Brain Health",
  description: "Objective, AI-powered neurological assessment to ensure a safe return to play for athletes.",
  // Add more metadata for enhanced SEO and sharing
  openGraph: {
    title: "VRx: A New Standard for Brain Health",
    description: "Objective, AI-powered neurological assessment for athletes.",
    url: "https://vrx.health", // Replace with actual domain
    siteName: "VRx Health",
    images: [
      {
        url: "/og-image.png", // Path to a compelling open graph image in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VRx: A New Standard for Brain Health",
    description: "Objective, AI-powered neurological assessment for athletes.",
    images: ["/og-image.png"], // Path to a compelling twitter card image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}