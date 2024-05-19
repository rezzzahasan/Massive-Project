import "../styles/Faqs.css";
function FAQS() {
  return (
    <section className="faqs">
      <h1>FAQS</h1>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question">Apa itu Pameran?</div>
          <div className="faq-answer">
            Pameran adalah kegiatan yang bertujuan untuk memperkenalkan produk
            atau layanan kepada publik melalui penampilan atau demonstrasi.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Apa itu E-Ticket?</div>
          <div className="faq-answer">
            E-Ticket adalah tiket elektronik yang digunakan untuk masuk ke suatu
            acara atau tempat, yang biasanya dikirim melalui email atau
            aplikasi.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Apa itu Anggota Promotor?</div>
          <div className="faq-answer">
            Anggota Promotor adalah individu atau organisasi yang bertanggung
            jawab untuk mempromosikan dan mengorganisir acara atau produk
            tertentu.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            Cara pendaftaran menjadi anggota promotor?
          </div>
          <div className="faq-answer">
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
