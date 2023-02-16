import { Inter } from "@next/font/google";
import AOS from "aos";
import { useEffect } from "react";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import MainBanner from "../components/organisms/MainBanner";
import FetureGame from "../components/organisms/FeaturedGame";
import TransactionStep from "../components/organisms/TransactionStep";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FetureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
