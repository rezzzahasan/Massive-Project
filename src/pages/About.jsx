import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";
import img1 from "../assets/About/G1.png";
import img2 from "../assets/About/G2.png";
import img3 from "../assets/About/G3.png";
import img4 from "../assets/About/G4.png";
import img5 from "../assets/About/G5.png";
import img6 from "../assets/About/G6.png";
import img7 from "../assets/About/G7.png";
import img8 from "../assets/About/G8.png";
import img9 from "../assets/About/G9.png";
import img10 from "../assets/About/G10.png";
import img11 from "../assets/About/G11.png";
import img12 from "../assets/About/G12.png";
import img13 from "../assets/About/G13.png";
import img14 from "../assets/About/G14.png";
import img15 from "../assets/About/G15.png";
import img16 from "../assets/About/G16.png";
import img17 from "../assets/About/G17.png";
import img18 from "../assets/About/G18.png";
import img19 from "../assets/About/G19.png";
import img20 from "../assets/About/G20.png";
import img21 from "../assets/About/G21.png";
import img22 from "../assets/About/G22.png";
import img23 from "../assets/About/G23.png";
import img24 from "../assets/About/G24.png";
import img25 from "../assets/About/G25.png";
import img26 from "../assets/About/G26.png";
import img27 from "../assets/About/G27.png";
import img28 from "../assets/About/G27.png";
import img29 from "../assets/About/G29.png";
import img30 from "../assets/About/G30.png";
import img31 from "../assets/About/G31.png";
import img32 from "../assets/About/G32.png";
import activityImg1 from "../assets/About/IM1.png";
import activityImg2 from "../assets/About/IM2.png";
import activityImg3 from "../assets/About/IM3.png";
import isi from "../assets/About/isi.png";

const About = () => {
  const memberImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    activityImg1,
    activityImg2,
    activityImg3,
  ];

  const activityImages = [activityImg1, activityImg2, activityImg3];
  const foto = [isi];

  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={foto} alt="Background" className="hero-bg" />
        <div className="hero-content-about">
          <div className="title-about">Jogja Arthibition</div>
          <p>
            Merupakan website yang bermanfaat bagi masyarakat dan wisatawan
            pecinta seni, pada website ini pengunjung dapat memperoleh informasi
            jadwal pameran dan promosi pameran di Yogyakarta
          </p>
        </div>
      </div>

      <div className="member-promotor">
        <div className="title-promotor">
          <h2>Member Promotor</h2>
          <p>
            Anggota promotor merupakan anggota yang siap untuk menjalankan dan
            memberikan informasi pameran melalui website ini, dengan benefit
            sertifikat dan dapat bertemu pencipta seni yang terkait dalam satu
            waktu khusus.
          </p>
        </div>
        <div className="member-grid">
          <div className="row">
            {memberImages.slice(0, 13).map((img, index) => (
              <img src={img} alt={`Member ${index + 1}`} key={index} />
            ))}
          </div>
          <div className="row">
            {memberImages.slice(13, 26).map((img, index) => (
              <img src={img} alt={`Member ${index + 14}`} key={index + 13} />
            ))}
          </div>
          <div className="row last-row">
            {memberImages.slice(26).map((img, index) => (
              <img src={img} alt={`Member ${index + 27}`} key={index + 26} />
            ))}
          </div>
        </div>
        <div className="total-member">50+</div>
        <a href="#" className="btn-primary">
          Pelajari Lebih Lanjut
        </a>
      </div>

      <div className="aktivitas-promotor">
        <h2>Aktivitas Promotor</h2>
        <p>
          Aktivitas Promotor untuk memperkenalkan informasi dan pameran seni
          yang sedang dilaksanakan
        </p>
        <div className="activities-grid">
          {activityImages.map((img, index) => (
            <div className="activity" key={index}>
              <img src={img} alt={`Activity ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
