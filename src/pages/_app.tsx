import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "../styles/globalicons.css";

const futura = localFont({
  src: [
    {
      path: "../assets/fonts/Futura Std Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Futura Std Heavy.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--font-futura",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${futura.variable} font-sans min-h-screen bg-bg-web`}>
      <Component {...pageProps} />
    </main>
  );
}
