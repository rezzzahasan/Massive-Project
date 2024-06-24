import QRCode from "react-qr-code";
import "../styles/PaymentCard.css";
import Warta from "../assets/img-pembayaran.png";
function PaymentCard() {
  return (
    <section>
      <div className="first-container-payment">
        <div className="container-payment">
          <div className="timer">
            <div className="title-payment">Sisa Waktu Pembayaran</div>
            <div className="countdown">00:00:00</div>
            <div>
              Selesaikan Pembayaranmu sebelum{" "}
              <span className="date-payment">Kamis, 09 May 2024 02:16 AM</span>
            </div>
          </div>
          <div className="info">
            <div className="method-payment">Shopeepay QRIS</div>
            <div className="order-code">Kode Pesanan: HQ120012Z</div>
            <div className="amount">Total Pembayaran: Rp. 325,000</div>
          </div>
          <div className="qr-container">
            <QRCode value="https://example.com/payment" size={256} />
            <div>Scan Kode QR diatas</div>
          </div>
          <a className="status-link" href="https://example.com/check-status">
            Cek Status Pembayaran
          </a>
        </div>
        <div className="info-ticket">
          <div className="header-info-ticket">
            <div className="container-code">
              <div className="text-kode-pesanan">Kode Pesanan :</div>
              <div className="kode-pesanan">HQ120012Z</div>
            </div>
            <div className="date-info-ticket"> Kamis, 09 May 2024</div>
          </div>
          <div className="line"></div>
          <div className="info-2">
            <img src={Warta} alt="" />
            <div className="detail-ticket">
              <div className="text-jadwal">Jadwal & Lokasi</div>
              <div className="date">08 May - 12 May 2024</div>
              <div className="time">10:00 - 18:00 WIB</div>
              <div className="location">Jogja Gallery, D.I. Yogyakarta</div>
            </div>
          </div>
          <div className="nama-tiket">Pameran Seni Rupa Warta #2</div>
        </div>
      </div>
    </section>
  );
}

export default PaymentCard;
