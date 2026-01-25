import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinoth Kumar | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 7+ years of experience building scalable, high-performance, and production-grade web applications using React, Next.js, and TypeScript.",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
  },

  keywords: [
    "Vinoth Kumar",
    "Senior Frontend Engineer",
    "Frontend Engineer Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Performance",
    "Frontend Architecture",
  ],

  authors: [{ name: "Vinoth Kumar", url: "https://vinothkumar.dev" }],
  creator: "Vinoth Kumar",
  publisher: "Vinoth Kumar",

  metadataBase: new URL("https://vinothkumar.dev"),

  openGraph: {
    title: "Vinoth Kumar | Senior Frontend Engineer",
    description:
      "Portfolio of Vinoth Kumar, a Senior Frontend Engineer specializing in scalable frontend systems, performance optimization, and modern web technologies.",
    url: "https://vinothkumar.dev",
    siteName: "Vinoth Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "/vinoth-kumar.webp",
        width: 1200,
        height: 630,
        alt: "Vinoth Kumar - Senior Frontend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinoth Kumar | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 7+ years of experience building scalable, production-grade frontend applications.",
    images: ["/vinoth-kumar.webp"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
