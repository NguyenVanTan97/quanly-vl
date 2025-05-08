import "@/styles/globals.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MainProvider } from "../context/main.context";
import "src/i18n/i18n"

export default function App({ Component, pageProps }: AppProps) {
 return (
  <MainProvider>
   <Component {...pageProps} />
  </MainProvider>
 );
}
