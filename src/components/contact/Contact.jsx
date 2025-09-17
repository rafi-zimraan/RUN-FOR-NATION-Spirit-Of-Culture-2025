import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Papa from "papaparse";

const MAX_PESERTA = 85;

const Contact = () => {
  const [isEarlyBirdOpen, setIsEarlyBirdOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csvUrl =
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZMfCu2YjL-eZhoVtv3dDH7DhkdAVnu8B2mMwRjjKKJY1A50AAE6JfEOgiGJ397cjX1gJDYPaJRegB/pub?output=csv";

        const response = await fetch(csvUrl);
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const rows = result.data;
            if (rows.length >= MAX_PESERTA) {
              setIsEarlyBirdOpen(false);
            }
          },
        });
      } catch (error) {
        console.error("Error fetching CSV:", error);
      }
    };

    fetchData();
  }, []);

  // Jika kuota habis
  if (!isEarlyBirdOpen) {
    return (
      <section
        style={{
          padding: "4rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "linear-gradient(145deg, #ffffff, #f2f2f2)",
            padding: "2.5rem 2rem",
            borderRadius: "20px",
            maxWidth: "480px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0px 8px 25px rgba(0,0,0,0.6)",
          }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1rem",
              color: "#b91c1c",
            }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Pendaftaran Ditutup
          </h2>
          <p style={{ color: "#555" }} data-aos="fade-up" data-aos-delay="200">
            Kuota 200 peserta pertama sudah terpenuhi. Tunggu batch berikutnya
            ya…
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="section"
      style={{
        padding: "4rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="contact"
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd1ICZDT-5DRKYRbhRgKmvMOR_xkggljcS5YbaohqieK5Todw/viewform?embedded=true"
        style={{ width: "100%", height: "100vh" }}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Memuat…
      </iframe>
    </section>
  );
};

export default Contact;

// ! MENGUNAKAN ALERT && TEMPLATE FORMINPUT
// import React, { useState } from "react";
// import "aos/dist/aos.css";

// const Contact = () => {
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // cegah reload halaman
//     setLoading(true);

//     const formData = new FormData(e.target);

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbyOI_RluOr2du5IdI-YqqWoa3yI2NjsisSDUE5Zg_fF9cXUW_CpSd3aYhF0g9qeW_5n/exec",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       setShowModal(true);
//       e.target.reset(); // reset form setelah sukses
//     } catch (error) {
//       alert("Terjadi kesalahan, silakan coba lagi!");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       className="contact section"
//       id="contact"
//       style={{ padding: "2rem 0" }}
//     >
//       <h2
//         className="section__title"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         style={{ textAlign: "center", marginBottom: "0.5rem" }}
//       >
//         Formulir Pendaftaran Run For Nation 2025
//       </h2>
//       <span
//         className="section__subtitle"
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         data-aos-delay="100"
//         style={{ display: "block", textAlign: "center", marginBottom: "2rem" }}
//       >
//         Silakan isi data dengan lengkap dan benar
//       </span>

//       {/* Ubah jadi pakai onSubmit */}
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           gap: "1.5rem",
//           maxWidth: "1000px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Nama Lengkap */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Nama Lengkap *</label>
//           <input
//             type="text"
//             name="namaLengkap"
//             required
//             placeholder="Masukkan nama lengkap"
//             style={inputStyle}
//           />
//         </div>

//         {/* Jenis Kelamin */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Jenis Kelamin *</label>
//           <select name="jenisKelamin" required style={inputStyle}>
//             <option value="">Pilih jenis kelamin</option>
//             <option value="Laki-laki">Laki-laki</option>
//             <option value="Perempuan">Perempuan</option>
//           </select>
//         </div>

//         {/* Tempat, Tanggal Lahir */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Tempat, Tanggal Lahir *</label>
//           <input
//             type="text"
//             name="ttl"
//             required
//             placeholder="Contoh: Pontianak, 01-01-2000"
//             style={inputStyle}
//           />
//         </div>

//         {/* Usia */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Usia (Minimal 12 tahun) *</label>
//           <input
//             type="number"
//             name="usia"
//             min="12"
//             required
//             placeholder="Masukkan usia"
//             style={inputStyle}
//           />
//         </div>

//         {/* Alamat Lengkap */}
//         <div
//           data-aos="fade-right"
//           data-aos-duration="1000"
//           style={{ gridColumn: "1 / -1" }}
//         >
//           <label>Alamat Lengkap *</label>
//           <textarea
//             name="alamatLengkap"
//             required
//             placeholder="Masukkan alamat lengkap"
//             style={{ ...inputStyle, height: "100px" }}
//           ></textarea>
//         </div>

//         {/* Nomor HP/WA */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Nomor HP/WA Aktif *</label>
//           <input
//             type="tel"
//             name="nomorHP"
//             required
//             placeholder="Masukkan nomor HP aktif"
//             style={inputStyle}
//           />
//         </div>

//         {/* Email */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Email *</label>
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="Masukkan email aktif"
//             style={inputStyle}
//           />
//         </div>

//         {/* Kontak Darurat */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Kontak Darurat *</label>
//           <select name="kontakDarurat" required style={inputStyle}>
//             <option value="">Pilih kontak darurat</option>
//             <option value="Orang Tua Kandung">Orang Tua Kandung</option>
//             <option value="Suami">Suami</option>
//             <option value="Istri">Istri</option>
//             <option value="Saudara Kandung">Saudara Kandung</option>
//             <option value="Anak">Anak</option>
//             <option value="Family">Family</option>
//           </select>
//         </div>

//         {/* Nomor HP Darurat */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Nomor HP Darurat *</label>
//           <input
//             type="tel"
//             name="nomorHPDarurat"
//             required
//             placeholder="Masukkan nomor HP darurat"
//             style={inputStyle}
//           />
//         </div>

//         {/* Nama BIB */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Nama BIB *</label>
//           <input
//             type="text"
//             name="namaBIB"
//             required
//             placeholder="Masukkan nama BIB"
//             style={inputStyle}
//           />
//         </div>

//         {/* Ukuran Jersey Dewasa */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Ukuran Jersey Peserta Dewasa</label>
//           <select name="jerseyDewasa" style={inputStyle}>
//             <option value="">Pilih ukuran (jika dewasa)</option>
//             <option value="3S">3S (LD: 44, PB: 62)</option>
//             <option value="2S">2S (LD: 45, PB: 64)</option>
//             <option value="XS">XS (LD: 47, PB: 66)</option>
//             <option value="S">S (LD: 49, PB: 68)</option>
//             <option value="M">M (LD: 50, PB: 70)</option>
//             <option value="L">L (LD: 52, PB: 72)</option>
//             <option value="XL">XL (LD: 54, PB: 74)</option>
//             <option value="2XL">2XL (LD: 56, PB: 76)</option>
//             <option value="3XL">3XL (LD: 58, PB: 78)</option>
//           </select>
//         </div>

//         {/* Ukuran Jersey Anak */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Ukuran Jersey Peserta Kids/Anak-anak</label>
//           <select name="jerseyKids" style={inputStyle}>
//             <option value="">Pilih ukuran (jika anak-anak)</option>
//             <option value="2">2 (LD: 30, PB: 40)</option>
//             <option value="4">4 (LD: 32, PB: 46)</option>
//             <option value="6">6 (LD: 34, PB: 48)</option>
//             <option value="8">8 (LD: 36, PB: 50)</option>
//             <option value="10">10 (LD: 38, PB: 51)</option>
//           </select>
//         </div>

//         {/* Jersey Lengan Panjang */}
//         <div
//           style={{ gridColumn: "1 / -1" }}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           <label>
//             <input type="checkbox" name="lenganPanjang" /> Saya ingin Jersey
//             Lengan Panjang (+Rp 10.000)
//           </label>
//         </div>

//         {/* Riwayat Kesehatan */}
//         <div
//           style={{ gridColumn: "1 / -1" }}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           <label>
//             <input type="checkbox" name="sehat" required /> Saya dalam keadaan
//             sehat dan sanggup mengikuti kegiatan lari ini
//           </label>
//           <br />
//           <label>
//             <input type="checkbox" name="kondisiKhusus" /> Saya memiliki kondisi
//             kesehatan khusus
//           </label>
//           <input
//             type="text"
//             name="detailKondisi"
//             placeholder="Jika ada kondisi khusus, sebutkan"
//             style={{ ...inputStyle, marginTop: "0.5rem" }}
//           />
//         </div>

//         {/* Pernyataan Tanggung Jawab */}
//         <div
//           style={{ gridColumn: "1 / -1" }}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           <label>
//             <input type="checkbox" name="pernyataanPeserta" required />
//             Pernyataan bahwa segala sesuatu yang terjadi selama race menjadi
//             tanggung jawab masing-masing peserta. (Bukan tanggung jawab panitia
//             penyelenggara)
//           </label>
//         </div>

//         {/* Pernyataan Peserta */}
//         <div
//           style={{ gridColumn: "1 / -1" }}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           <label>
//             <input type="checkbox" name="pernyataanTanggungJawab" required />{" "}
//             Saya menyatakan bahwa seluruh data yang saya isi adalah benar, serta
//             bersedia mengikuti seluruh aturan panitia Run For Nation 2025 dengan
//             penuh sportivitas
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div
//           style={{
//             gridColumn: "1 / -1",
//             textAlign: "center",
//             marginTop: "2rem",
//           }}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//           data-aos-delay="200"
//         >
//           <button
//             type="submit"
//             disabled={loading}
//             style={{
//               backgroundColor: "#000",
//               color: "#fff",
//               padding: "0.75rem 2rem",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               fontSize: "1rem",
//               fontWeight: "bold",
//               opacity: loading ? 0.6 : 1,
//             }}
//           >
//             {loading ? "Mengirim..." : "Kirim Pendaftaran"}
//           </button>
//         </div>
//       </form>

//       {/* Modal */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.6)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "2rem",
//               borderRadius: "12px",
//               maxWidth: "500px",
//               width: "90%",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//             }}
//           >
//             <h3 style={{ marginTop: 0, marginBottom: "1rem" }}>
//               Pendaftaran Berhasil 🎉
//             </h3>
//             <p style={{ marginBottom: "1rem", lineHeight: "1.5" }}>
//               Silakan lakukan transfer ke rekening berikut:
//               <br />
//               <strong>Bank: BSI</strong>
//               <br />
//               <strong>No. Rekening: 2024232215</strong>
//               <br />
//               <strong>Atas Nama: Yahya Organizer</strong>
//             </p>
//             <p style={{ marginBottom: "1rem", lineHeight: "1.5" }}>
//               Setelah transfer, konfirmasi via WhatsApp:
//               <br />
//               <a
//                 href="https://wa.me/6285393669366"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ color: "blue", textDecoration: "underline" }}
//               >
//                 Meli (0853-9366-9366)
//               </a>
//               <br />
//               <a
//                 href="https://wa.me/6281250721792"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ color: "blue", textDecoration: "underline" }}
//               >
//                 Wildan (0812-5072-1792)
//               </a>
//             </p>
//             <a
//               href="https://chat.whatsapp.com/DcIe3ywYk4PF7NGrcdPIK0"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 display: "inline-block",
//                 marginBottom: "1rem",
//                 color: "green",
//                 fontWeight: "bold",
//                 textDecoration: "underline",
//               }}
//             >
//               👉 Gabung Grup WhatsApp Peserta
//             </a>
//             <br />
//             <button
//               onClick={() => setShowModal(false)}
//               style={{
//                 padding: "0.5rem 1.5rem",
//                 background: "#000",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//               }}
//             >
//               Tutup
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// // Reusable inline input style
// const inputStyle = {
//   width: "100%",
//   padding: "0.75rem",
//   borderRadius: "10px",
//   border: "1px solid #ccc",
//   marginTop: "0.5rem",
// };

// export default Contact;
