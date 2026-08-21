import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewportFix } from "@/components/ViewportFix";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carolina Students",
  description: "Tar Heels Bank Here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body>
        <ViewportFix />
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
