import "../globals.css";
import { Footer, Header } from "@/globals";
import { Toaster } from "@/components/ui/sonner";
import { Newsletter } from "@/components/homepage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div aria-label="home-layout">
      <Header />
      <div>{children}</div>
      <Toaster />
      <Newsletter />
      <Footer />
    </div>
  );
}
