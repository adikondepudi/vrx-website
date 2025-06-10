import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vrx.health'),
  title: {
    default: "VRx: A New Standard for Brain Health",
    template: "%s | VRx Health"
  },
  description: "Objective, AI-powered neurological assessment for athletes. The clarity of science, the elegance of technology. Revolutionizing concussion care through precision VR technology.",
  keywords: [
    "VR concussion assessment",
    "brain health technology", 
    "sports medicine AI",
    "neurological monitoring",
    "return to play protocol",
    "traumatic brain injury",
    "athlete safety technology",
    "Johns Hopkins research"
  ],
  authors: [{ name: "VRx Technologies Inc." }],
  creator: "VRx Technologies Inc.",
  publisher: "VRx Technologies Inc.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vrx.health',
    title: 'VRx: A New Standard for Brain Health',
    description: 'Objective, AI-powered neurological assessment for athletes. The clarity of science, the elegance of technology.',
    siteName: 'VRx Health',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VRx - Revolutionary Brain Health Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VRx: A New Standard for Brain Health',
    description: 'Objective, AI-powered neurological assessment for athletes. The clarity of science, the elegance of technology.',
    images: ['/twitter-image.png'],
    creator: '@VRxHealth',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://vrx.health',
  },
  category: 'technology',
  classification: 'Medical Technology',
  other: {
    'theme-color': '#667eea',
    'color-scheme': 'dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Performance optimization */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Additional meta tags for premium experience */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VRx Technologies Inc.",
              "url": "https://vrx.health",
              "logo": "https://vrx.health/logo.png",
              "description": "Revolutionary VR-based neurological assessment technology for athletes",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Adi Kondepudi"
                }
              ],
              "industry": "Medical Technology",
              "keywords": "VR, concussion assessment, brain health, sports medicine, AI",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@vrx.health",
                "contactType": "Customer Service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Baltimore",
                "addressRegion": "MD",
                "addressCountry": "US"
              }
            })
          }}
        />
      </body>
    </html>
  );
}