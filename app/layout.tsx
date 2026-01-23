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
    icon: "/logo.svg",
  },
  keywords: ["Vinoth Kumar", "Portfolio", "Frontend Developer"],
  authors: [{ name: "Vinoth", url: "https://vinothkumar.dev" }],
  creator: "Vinoth",
  publisher: "Vinoth",
  openGraph: {
    title: "Vinoth Kumar Portfolio | Frontend Developer",
    description: "Vinoth Kumar Portfolio | Frontend Developer",
    url: "https://vinothkumar.dev",
    siteName: "Vinoth Kumar Portfolio",
    images: [{ url: "/favicon.ico" }],
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
