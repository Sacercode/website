import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/Global/CustomCursor/component";
import "./globals.css";
import Header from "@/components/Global/Header/component";
import Footer from "@/components/Global/Footer/components";

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
  description: "Sacercode, votre partenaire en conseil et formation informatique. Site web en construction.",
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
        <div className="flex flex-col justify-between pt-24">
          <Header/>
          <CustomCursor />
          <main className="min-h-screen bg-white dark:bg-black grow flex flex-col items-center justify-center px-6">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
