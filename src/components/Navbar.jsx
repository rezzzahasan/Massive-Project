import '../styles/Navbar.css';
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <a href="" className="nav-link active">
            Beranda
          </a>
        </li>
        <li>
          <a href="pages/pameran.html" className="nav-link">
            Pameran
          </a>
        </li>
        <li>
          <a href="" className="nav-link">
            Tentang Kami
          </a>
        </li>
        <div className="sign">
          <button className="btn-primary">Daftar</button>
          <button className="btn-secondary">Masuk</button>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
