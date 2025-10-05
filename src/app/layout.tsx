import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header"; // Import the new Header

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

// You can update this metadata later to reflect the new brand
export const metadata: Metadata = {
  metadataBase: new URL('https://recovr-diagnostics.com'), // Example new domain
  title: {
    default: "RecoVR: Clarity in Concussion Recovery",
    template: "%s | RecoVR Diagnostics"
  },
  description: "RecoVR's VRx platform provides objective, data-driven insights for Traumatic Brain Injury (TBI) assessment to help clinicians make safer return-to-play decisions.",
  // ... other metadata can be updated as well
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-hidden`}>
      <head>
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden relative`}>
        <Header /> {/* Add the Header here */}
        <div className="min-h-screen relative overflow-x-hidden">
          {children}
        </div>
        {/* Structured data script can be updated or removed */}
      </body>
    </html>
  );
}