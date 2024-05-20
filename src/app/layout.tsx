import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react"
import AdSense from "@/components/AdSense";
import AdBanner from "@/components/AdBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Employment Echo",
  description: "We connect you to your future job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense pId="ca-pub-5428303296729283"/>
      </head>
      <body className={inter.className}>
       <Navbar/>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">
        {children}
        <Analytics />
        </main>
        <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9928664512"/>
        <Footer />
        </body>
    </html>
  );
}
