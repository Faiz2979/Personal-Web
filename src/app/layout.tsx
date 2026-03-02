import Navbar from "@/_components/Navbar";
import Providers from "@/_components/providers";
import { QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { KoHo } from "next/font/google";
import localFont from "next/font/local";
import './custom.css';
import "./globals.css";

const koho = KoHo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-koho",
});
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Faiz Annabil",
  description: "Welcome to my personal website, where I share my experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${koho.variable}`}>
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
