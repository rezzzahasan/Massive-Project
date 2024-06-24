import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Exhibitions from "./pages/Exhibitions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Pembayaran from "./pages/Pembayaran";
import DetailPameran from "./pages/DetailPameran";
import RiwayatPemesanan from "./pages/RiwayatPemesanan";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pameran" element={<Exhibitions />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/detail-pameran" element={<DetailPameran />} />
          <Route path="/riwayat-pemesanan" element={<RiwayatPemesanan />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
