import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/globals";
import { Toaster } from "@/components/ui/sonner";
import { Newsletter } from "@/components/homepage";

const interSans = Inter({
  variable: "--inter-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Online Arabic Tuition for UAE students",
  description: "Meta description goes here...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
