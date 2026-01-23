import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${roboto.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
