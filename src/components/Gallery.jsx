import "../styles/Gallery.css";
import Component7 from "../assets/content/Component 7.png";
import Component8 from "../assets/content/Component 8.png";
import Component9 from "../assets/content/Component 9.png";
import Component10 from "../assets/content/Component 10.png";
import Component11 from "../assets/content/Component 11.png";
import Component12 from "../assets/content/Component 12.png";
import Component13 from "../assets/content/Component 13.png";
import Component14 from "../assets/content/Component 14.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="text">
        <h1>Gallery Pameran</h1>
        <p>
          Jelajahi pengalaman Anda untuk mengetahui lebih lanjut tentang pameran
        </p>
      </div>
      <div className="photo">
        <div className="photo-item">
          <img src={Component7} alt="Pameran" />
          <div className="info">Pameran</div>
        </div>
        <div className="photo-item">
          <img src={Component8} alt="Pameran Sejarah" />
          <div className="info">Pameran Sejarah</div>
        </div>
        <div className="photo-item">
          <img src={Component9} alt="Informasi Gambar 3" />
          <div className="info">Informasi Gambar 3</div>
        </div>
        <div className="photo-item">
          <img src={Component10} alt="Informasi Gambar 4" />
          <div className="info">Informasi Gambar 4</div>
        </div>
        <div className="photo-item">
          <img src={Component11} alt="Informasi Gambar 5" />
          <div className="info">Informasi Gambar 5</div>
        </div>
        <div className="photo-item">
          <img src={Component12} alt="Informasi Gambar 6" />
          <div className="info">Informasi Gambar 6</div>
        </div>
        <div className="photo-item">
          <img src={Component13} alt="Informasi Gambar 7" />
          <div className="info">Informasi Gambar 7</div>
        </div>
        <div className="photo-item">
          <img src={Component14} alt="Informasi Gambar 8" />
          <div className="info">Informasi Gambar 8</div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
