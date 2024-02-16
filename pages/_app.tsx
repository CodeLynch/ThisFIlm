import MyFooter from "@/components/footer/myFooter";
import MyNavBar from "@/components/nav/myNavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <div className="relative min-h-screen">
  <MyNavBar />
  <Component {...pageProps} />
  <MyFooter/>
  </div>;
}
