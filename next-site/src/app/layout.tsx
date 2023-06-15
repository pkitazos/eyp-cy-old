import { useRouter } from "next/router";
import { Source_Sans_Pro } from "next/font/google";
import { Footer, Header, WaveDivider } from "~/components";
import { paths } from "~/data";
import "./globals.css";
import { Head } from "next/document";

export const metadata = {
  title: "EYP CY",
};

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
  const router = useRouter();
  const path = router.pathname;

  return (
    <html lang="en" className={`${sourceSansPro.variable} font-sans`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{metadata.title}</title>
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
            <div className="bg-primary-800 h-12">&nbsp;</div>
            <WaveDivider waveLayers={paths.headerHorizontal} />
          </div>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
