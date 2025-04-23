import "../globals.css";
import { Footer, Header } from "@/globals";
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
      <Newsletter />
      <Footer />
    </div>
  );
}
