import Newsletter from "@/globals/Newsletter";
import "../globals.css";
import { Footer, Header } from "@/globals";

export default function HomeLayout({
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
