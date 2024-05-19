import "../styles/Footer.css";
import logo_white from "../assets/Logo - White.svg";
import youtube from "../assets/social media/youtube.svg";
import instagram from "../assets/social media/instagram.svg";
import facebook from "../assets/social media/facebook.svg";
import twitter from "../assets/social media/twitter.svg";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="contact">
          <div className="logo">
            <img src={logo_white} alt="" />
          </div>
          <p>
            Jl. Kaliurang KM 14,5, Ngaglik, Kec. Sleman, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55581
          </p>
          <p>jogja_arhibition@gmail.com</p>
          <p>+6289526295267</p>
        </div>
        <div className="mengenai">
          <h4>Mengenai</h4>
          <p>Cara Pesan?</p>
          <p>Tentang Kami</p>
        </div>
        <div className="menu">
          <h4>Menu</h4>
          <p>Beranda</p>
          <p>Pameran</p>
        </div>
        <div className="lainnya">
          <h4>Lainnya</h4>
          <p>FAQ</p>
          <p>Hubungi Kami</p>
          <p>Syarat dan Ketentuan</p>
        </div>
        <div className="social-media">
          <h4>Social Media</h4>
          <div className="icon">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      <div id="copyright">
        Copyright © 2024 Jogja Arthibition. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
