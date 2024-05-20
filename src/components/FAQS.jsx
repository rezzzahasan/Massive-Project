import "../styles/Faqs.css";
import { useState } from "react";

function FAQS() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <h1>FAQS</h1>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(0)}>
            Apa itu Pameran?
          </div>
          <div className={`faq-answer ${activeIndex === 0 ? "active" : ""}`}>
            Pameran adalah kegiatan yang bertujuan untuk memperkenalkan produk
            atau layanan kepada publik melalui penampilan atau demonstrasi.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(1)}>
            Apa itu E-Ticket?
          </div>
          <div className={`faq-answer ${activeIndex === 1 ? "active" : ""}`}>
            E-Ticket adalah tiket elektronik yang digunakan untuk masuk ke suatu
            acara atau tempat, yang biasanya dikirim melalui email atau
            aplikasi.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(2)}>
            Apa itu Anggota Promotor?
          </div>
          <div className={`faq-answer ${activeIndex === 2 ? "active" : ""}`}>
            Anggota Promotor adalah individu atau organisasi yang bertanggung
            jawab untuk mempromosikan dan mengorganisir acara atau produk
            tertentu.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(3)}>
            Cara pendaftaran menjadi anggota promotor?
          </div>
          <div className={`faq-answer ${activeIndex === 3 ? "active" : ""}`}>
            Untuk mendaftar menjadi anggota promotor, biasanya Anda perlu
            mengisi formulir pendaftaran yang tersedia di situs web atau
            menghubungi pihak penyelenggara untuk mendapatkan informasi lebih
            lanjut.
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQS;
