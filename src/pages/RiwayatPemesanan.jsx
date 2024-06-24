import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/RiwayatPemesanan.css";
const data = [
  {
    id: 1,
    noPesanan: "12345",
    namaPameran: 'Photography Exhibition "Borderless"',
    tanggalPembayaran: "2023-05-20",
    hargaTiket: "Rp.150.000",
    jumlah: "x2",
    total: "Rp.300.000",
    status: "Selesai",
    eTicket: "Download",
  },
  {
    id: 2,
    noPesanan: "12346",
    namaPameran: "Retoro Matsuri",
    tanggalPembayaran: "2023-06-15",
    hargaTiket: "Rp.150.000",
    jumlah: "x1",
    total: "Rp.150.000",
    status: "Pending",
    eTicket: "-",
  },
  {
    id: 3,
    noPesanan: "12347",
    namaPameran: "Pameran Edukasi",
    tanggalPembayaran: "2023-07-10",
    hargaTiket: "Rp.40.000",
    jumlah: "x4",
    total: "Rp.120.000",
    status: "Selesai",
    eTicket: "Download",
  },
  {
    id: 4,
    noPesanan: "12346",
    namaPameran: "Retoro Matsuri",
    tanggalPembayaran: "2023-06-15",
    hargaTiket: "Rp.150.000",
    jumlah: "x1",
    total: "Rp.150.000",
    status: "Pending",
    eTicket: "-",
  },
  {
    id: 5,
    noPesanan: "12347",
    namaPameran: "Pameran Edukasi",
    tanggalPembayaran: "2023-07-10",
    hargaTiket: "Rp.40.000",
    jumlah: "x4",
    total: "Rp.120.000",
    status: "Selesai",
    eTicket: "Download",
  },
];
function RiwayatPemesanan() {
  return (
    <div>
      <Navbar />
      <section className="s-riwayat">
        <h1>Riwayat Pemesanan</h1>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>No. Pesanan</th>
              <th>Nama Pameran</th>
              <th>Tanggal Pembayaran</th>
              <th>Harga Tiket</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th>Status</th>
              <th>E-Ticket</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.noPesanan}</td>
                <td>{row.namaPameran}</td>
                <td>{row.tanggalPembayaran}</td>
                <td>{row.hargaTiket}</td>
                <td>{row.jumlah}</td>
                <td>{row.total}</td>
                <td
                  className={
                    row.status === "Selesai"
                      ? "status-selesai"
                      : "status-pending"
                  }
                >
                  {row.status}
                </td>
                <td>
                  {row.eTicket !== "-" ? (
                    <a href="#" className="download-link">
                      Download
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}
export default RiwayatPemesanan;
