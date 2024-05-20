import { useState, useEffect } from "react";
import CardTicket from "../components/CardTicket";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Pameran.css";
import Gambar1 from "../assets/bg-image-pameran-1.png";
import Gambar2 from "../assets/bg-image-pameran-2.jpg";
import Gambar3 from "../assets/bg-image-pameran-3.jpg";

const Exhibitions = () => {
  const images = [Gambar1, Gambar2, Gambar3];
  const texts = [
    "Pameran Barang Antik",
    "Pameran Seni Rupa",
    "Pameran Fotografi",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />
      <section
        className="pameran"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-content">
          <div className="text-pameran">{texts[currentIndex]}</div>
        </div>
      </section>
      <div className="categories">
        <button className="btn-primary">Semua Pameran</button>
        <button className="btn-tertiary">Pameran Seni Rupa</button>
        <button className="btn-tertiary">Pameran Fotografi</button>
        <button className="btn-tertiary">Pameran Barang Antik</button>
        <button className="btn-tertiary">Pameran Seni Budaya</button>
        <button className="btn-tertiary">Pameran Sejarah</button>
      </div>
      <CardTicket />
      <Footer />
    </>
  );
};

export default Exhibitions;
