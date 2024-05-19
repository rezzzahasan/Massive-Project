import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Pameran.css";

const Exhibitions = () => {
  return (
    <>
      <Navbar />
      <section className="pameran">
        <div className="hero-content">
          <div className="text-pameran">Pameran Barang Antik</div>
        </div>
      </section>
      <div className="categories">
        <button className="btn-primary">Semua Pameran</button>
        <button className="btn-tertiary">Pameran Seni Rupa</button>
        <button className="btn-tertiary">Pameran Fotografi</button>
        <button className="btn-tertiary">Pameran Barang Antik</button>
        <button className="btn-tertiary">Pameran Seni Budaya</button>
      </div>
    </>
  );
};
export default Exhibitions;
