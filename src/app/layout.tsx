import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/Global/CustomCursor/component";
import Header from "@/components/Global/Header/component";
import Footer from "@/components/Global/Footer/components";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacercode - Conseil et Formation en Informatique",
  description: "Sacercode, votre partenaire en conseil et formation informatique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="background-waves">
          <Image src="/images/barcode_waves_3.jpg" alt="Background waves" fill priority={true} />
        </div>
        <CustomCursor />
        <Header />
        <main className="content-holder">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
