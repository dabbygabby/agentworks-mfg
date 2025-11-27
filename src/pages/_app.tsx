import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@src/components/Layout";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Clarity.init("ucf1o5w9y9");
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <div className={`${montserrat.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
