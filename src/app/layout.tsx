import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react"

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
      <meta name="google-adsense-account" content="ca-pub-5428303296729283"/>
      {process.env.NODE_ENV === "production" && (
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5428303296729283"
     crossOrigin="anonymous"></script>
    )}
      </head>
      <body className={inter.className}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5428303296729283"
     crossOrigin="anonymous"></script>
<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-5428303296729283"
     data-ad-slot="9928664512"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
       <Navbar/>
        <main className="p-4 max-w-7xl m-auto min-w-[300px]">
        {children}
        <Analytics />
        </main>
        <Footer />
        </body>
    </html>
  );
}
