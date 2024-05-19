import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Gallery from "../components/Gallery";
import Testimonial from "../components/Testimonial";
import FAQS from "../components/FAQS";
import "../styles/Home.css";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Gallery />
      <Testimonial />
      <FAQS />
      <Footer />
    </>
  );
}
export default Home;
