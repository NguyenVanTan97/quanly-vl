import { ImageSlide } from "@/components/about/ImageSlide";
import { About } from "../../components/about/About";
import { Banner } from "../../components/about/Banner";
import { Statictis } from "../../components/about/Statictis";
import { Step } from "../../components/about/Step";
import { WhyChoose } from "../../components/about/WhyChoose";
import { Footer } from "../../layouts/Footer";
import { Head } from "../../layouts/head";
import { Header } from "../../layouts/Header";

export default function AboutPage() {
 return (
  <>
   <Head />
   <Header />
   <main>
    <Banner />
    <About />
    <Step />
    <ImageSlide />
    <WhyChoose />
    <Statictis />
   </main>
   <Footer />
  </>
 );
}
