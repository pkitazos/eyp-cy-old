"use client";

import { usePathname } from "next/navigation";
import { Source_Sans_Pro } from "next/font/google";
import { Footer, Header, WaveDivider } from "~/components";
import { paths } from "~/data";
import "./globals.css";
import Head from "next/head";

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <html
      lang="en"
      className={`${sourceSansPro.variable} bg-base-white font-sans`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>EYP CY</title>
      </Head>
      <body className="overflow-x-clip">
        {path == "/" && (
          <div className="absolute left-0 top-[10vh] -z-10 w-full">
            <WaveDivider
              waveLayers={paths.headerDiagonal}
              viewBox="0 0 1000 650"
            />
          </div>
        )}
        <Header />
        {path != "/" && (
          <div className="-mb-40">
            <div className="h-12 bg-primary-800">&nbsp;</div>
            <WaveDivider waveLayers={paths.headerHorizontal} />
          </div>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
