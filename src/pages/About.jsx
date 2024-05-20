import Navbar from "../components/Navbar";
import "../styles/About.css";

function About() {
  return (
    <>
      <Navbar />
      <section className="hero-about">
        <div className="hero-content">
          <div className="title-about">Jogja Arthibition</div>
          <div className="sub-title-about">
            Merupakan website yang bermanfaat bagi masyarakat dan wisatawan
            pecinta seni, pada website ini pengunjung dapat memperoleh informasi
            jadwal pameran dan promosi pameran di Yogyakarta
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
