import React, { useState } from "react";
import foto from "../assets/foto.png";
import logo from "../assets/Loco.png";
import "../styles/DetailPameran.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const DetailPameran = () => {
  const [activeTab, setActiveTab] = useState("deskripsi");
  const [ticketQuantities, setTicketQuantities] = useState({
    sesi1: 0,
    sesi2: 0,
    sesi3: 0,
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleTicketQuantityChange = (session, quantity) => {
    setTicketQuantities({
      ...ticketQuantities,
      [session]: quantity,
    });
  };

  const calculateTotalTickets = () => {
    return Object.values(ticketQuantities).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const calculateTotalPrice = () => {
    const prices = {
      sesi1: 100000,
      sesi2: 125000,
      sesi3: 150000,
    };

    return Object.keys(ticketQuantities).reduce((total, session) => {
      return total + prices[session] * ticketQuantities[session];
    }, 0);
  };

  return (
    <>
      <div style={{ marginTop: "81px" }}>
        <Navbar />
        <div className="conts">
          <div className="breadcrumb">
            <b>Exhibitions </b> &gt; PAMERAN SENI RUPA WARTA #2
          </div>
          <div className="main-content">
            <div className="exhibition-card">
              <div className="exhibition-image">
                <img src={foto} alt="WARTA Exhibition Image" />
              </div>
              <div className="exhibition-details">
                <div className="exhibition-info">
                  <h2>PAMERAN SENI RUPA WARTA #2</h2>
                  <p>08 May - 12 May 2024</p>
                  <p>10:00 - 18:00 WIB</p>
                  <p>Jogja Gallery, D.I. Yogyakarta</p>
                </div>
                <div className="exhibition-logo">
                  <img src={logo} alt="Jogja Gallery Logo" />
                  <span className="span2">Diselenggarakan oleh</span>
                  <span className="span3">Jogja Gallery</span>
                </div>
              </div>
            </div>
            <div className="description-besar">
              <div className="description-ticket-container">
                <div className="ticket-besar">
                  <div className="conts2">
                    <div className="tabs">
                      <button
                        className={`tab-button ${
                          activeTab === "deskripsi" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("deskripsi")}
                      >
                        DESKRIPSI
                      </button>
                      <button
                        className={`tab-button ${
                          activeTab === "tiket" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick("tiket")}
                      >
                        TIKET
                      </button>
                    </div>
                    <div
                      className="tab-content"
                      style={{
                        display: activeTab === "deskripsi" ? "block" : "none",
                      }}
                    >
                      <h3>Pameran Seni Rupa Warta #2:</h3>
                      <div className="teks">
                        {" "}
                        Toeti Heraty Museum menampilkan koleksi seni rupa lebih
                        dari 200an dari 80an perupa. Ditata pada setiap ruang
                        pamer yang bernuansa rumah. Koleksinya dalam bentuk
                        lukisan, patung, grafis, dan sebagainya merupakan bagian
                        penting dari perjalanan seni rupa Indonesia, perupa
                        Indonesia modern, hingga kontemporer. Nama besar seperti
                        Basoeki Abdullah, Affandi, Salim, S. Sudjojono, Mochtar
                        Apin, Nasirun, Srihadi Soedarsono, Zaini, Otto Djau,
                        Agus Djaja, Zaini, G. Sidharta, Amak Baldjai, dan banyak
                        lagi. Toeti Heraty dikenal sebagai seorang penyair,
                        filsuf, dan feminis, ia memiliki kesadaran untuk
                        menghadirkan ruang dan dukungan terhadap seni rupa
                        Indonesia, ini terwujud dalam koleksi di Toeti Heraty
                        Museum. Tokoh perupa yang diantaranya Kartika Affandi,
                        Umi Dachlan, Ratmini Soejatmadiko, Nuning WS, dan masih
                        banyak lagi. Selain koleksi seni, terdapat juga arsip
                        dan koleksi buku-buku pada Perpustakaan Toeti Heraty.
                      </div>
                      <h4>Periode Pameran :</h4>
                      <div className="teks">08 May - 12 May 2024</div>
                      <h4>Operasional Ruang Pamer Jogja Gallery :</h4>
                      <div className="teks">Senin - Minggu</div>
                      <h4>Sesi Kunjungan :</h4>
                      <ul>
                        <li>Pukul 10.00 – 12.00 (Sesi I)</li>
                        <li>Pukul 13.00 – 15.00 (Sesi II)</li>
                        <li>Pukul 15.00 – 18.00 (Sesi III)</li>
                      </ul>
                      <h4>Syarat & Ketentuan:</h4>
                      <div className="teks">-</div>
                      <h5>Tata tertib kunjungan di area pameran:</h5>
                      <ul>
                        <li>
                          Tidak boleh menyentuh dan memegang seluruh karya seni
                          (kecuali karya seni interaktif).
                        </li>
                        <li>
                          Tidak boleh menggunakan flash kamera, tripod dan
                          tongkat selfie saat mengambil gambar pameran.
                        </li>
                        <li>
                          Tidak boleh makan, minum dan merokok di ruang pamer.
                        </li>
                        <li>
                          Tidak boleh membawa binatang peliharaan ke dalam ruang
                          pamer.
                        </li>
                        <li>
                          Tidak boleh membawa tanaman berbunga, bawang berukuran
                          kecil sehingga anda dapat membawanya ke dalam ruang
                          pamer.
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-content"
                      style={{
                        display: activeTab === "tiket" ? "block" : "none",
                      }}
                    >
                      <div className="ticket-session">
                        <div className="ticket-title">
                          PAMERAN SENI RUPA WARTA #2
                        </div>
                        <div className="ticket-time">
                          Sesi 1 (10.00 - 12.00)
                        </div>
                        <div className="ticket-end">
                          Berakhir 12 May 2024 10:00 WIB
                        </div>
                        <div className="ticket-price">Rp.100.000</div>
                        <div className="ticket-actions">
                          <button
                            className="ticket-btn"
                            onClick={() =>
                              handleTicketQuantityChange(
                                "sesi1",
                                Math.max(ticketQuantities.sesi1 - 1, 0)
                              )
                            }
                          >
                            -
                          </button>
                          <span className="ticket-quantity">
                            {ticketQuantities.sesi1}
                          </span>
                          <button
                            className="ticket-btn"
                            onClick={() =>
                              handleTicketQuantityChange(
                                "sesi1",
                                ticketQuantities.sesi1 + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="ticket-session">
                        <div className="ticket-title">
                          PAMERAN SENI RUPA WARTA #2
                        </div>
                        <p className="ticket-time">Sesi 2 (13.00 - 15.00)</p>
                        <p className="ticket-end">
                          Berakhir 12 May 2024 10:00 WIB
                        </p>
                        <p className="ticket-price">Rp.125.000</p>
                        <div className="ticket-actions">
                          <button
                            className="ticket-btn"
                            onClick={() =>
                              handleTicketQuantityChange(
                                "sesi2",
                                Math.max(ticketQuantities.sesi2 - 1, 0)
                              )
                            }
                          >
                            -
                          </button>
                          <span className="ticket-quantity">
                            {ticketQuantities.sesi2}
                          </span>
                          <button
                            className="ticket-btn"
                            onClick={() =>
                              handleTicketQuantityChange(
                                "sesi2",
                                ticketQuantities.sesi2 + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="ticket-session">
                        <div className="ticket-title">
                          PAMERAN SENI RUPA WARTA #2
                        </div>
                        <p className="ticket-time">Sesi 3 (15.00 - 18.00)</p>
                        <p className="ticket-end">
                          Berakhir 12 May 2024 10:00 WIB
                        </p>
                        <p className="ticket-price">Rp.150.000</p>
                        <div className="ticket-actions">
                          <button
                            className="ticket-btn"
                            onClick={() =>
                              handleTicketQuantityChange(
                                "sesi3",
                                Math.max(ticketQuantities.sesi3 - 1, 0)
                              )
                            }
                          >
                            -
                          </button>
                          <span className="ticket-quantity">
                            {ticketQuantities.sesi3}
                          </span>
                          <button
                            className="ticket-btn"
                            onClick={() =>
                              handleTicketQuantityChange(
                                "sesi3",
                                ticketQuantities.sesi3 + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ticket-purchase">
                    <div className="ticket-summary">
                      <span>
                        Total{" "}
                        <span id="total-tickets">
                          {calculateTotalTickets()}
                        </span>{" "}
                        Tiket
                      </span>
                      <span className="ticket-price">
                        Rp.<span id="total-price">{calculateTotalPrice()}</span>
                      </span>
                    </div>
                    <hr />
                    <NavLink to="/pembayaran">
                      <button className="btn-buy-ticket">
                        <h3>Beli Tiket</h3>
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPameran;
