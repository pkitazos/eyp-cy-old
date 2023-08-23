import { Source_Sans_3 } from "next/font/google";
import { Footer, Header } from "~/components";
import "./app.css";
import DebugOverlay from "~/components/debug-overlay";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  weight: ["400", "600", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <DebugOverlay />
      <body className="bg-base-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
