import { AboutUs } from "../components/home/AboutUs";
import { Amenities } from "../components/home/Amenities";
import { Banner } from "../components/home/Banner";
import { Gallery } from "../components/home/Gallery";
import { Location } from "../components/home/Location";
import { Love } from "../components/home/Love";
import { Luxury } from "../components/home/Luxury";
import { Review } from "../components/home/Review";
import { ShortPrice } from "../components/home/ShortPrice";
import { Footer } from "../layouts/Footer";
import { Head } from "../layouts/head";
import { Header } from "../layouts/Header";

export default function Home() {
 return (
  <>
   <Head />
   <Header />
   <main>
    {/* <Banner /> */}
    <AboutUs />
    <ShortPrice />
    <Amenities />
    <Luxury />
    <Review />
    <Gallery />
    <Location />
    <Love />
   </main>
   <Footer />
  </>
 );
}
