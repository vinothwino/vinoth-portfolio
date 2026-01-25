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
  title: "Vinoth Kumar | Frontend Developer",
  description: "Vinoth Kumar | Frontend Developer",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  keywords: ["Vinoth Kumar", "Portfolio", "Frontend Developer"],
  authors: [{ name: "Vinoth", url: "https://vinothkumar.dev" }],
  creator: "Vinoth",
  publisher: "Vinoth",
  metadataBase: new URL("https://vinothkumar.dev"),
  openGraph: {
    title: "Vinoth Kumar Portfolio | Frontend Developer",
    description: "Vinoth Kumar Portfolio | Frontend Developer",
    url: "https://vinothkumar.dev",
    siteName: "Vinoth Kumar Portfolio",
    type: "website",
    images: [
      {
        url: "/vinoth-kumar.webp",
        alt: "Vinoth Kumar - Frontend Developer",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinoth Kumar | Frontend Developer",
    description: "Portfolio showcasing modern web development projects and skills",
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
