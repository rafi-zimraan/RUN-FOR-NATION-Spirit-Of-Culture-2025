import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Papa from "papaparse";

const MAX_PESERTA = 200;

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

// ! INI UNTUK PENDAFTARAN FORMINPUT
// import React from "react";
// import "aos/dist/aos.css";

// const Contact = () => {
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

//       <form
//         action="https://script.google.com/macros/s/AKfycbyHllYQ9Nx6lT0xTXaL39FL_3wetGHSB9j1IqxfPhSF-TwwHrJvri9Ka3GGolR-OZ-y/exec"
//         method="POST"
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
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           />
//         </div>

//         {/* Jenis Kelamin */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Jenis Kelamin *</label>
//           <select
//             name="jenisKelamin"
//             required
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           >
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
//             placeholder="Contoh: Jakarta, 01-01-2000"
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           />
//         </div>

//         {/* Usia */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Usia *</label>
//           <input
//             type="number"
//             name="usia"
//             min="12"
//             required
//             placeholder="Minimal 12 tahun"
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           />
//         </div>

//         {/* Nomor HP/WA */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Nomor HP/WA Aktif *</label>
//           <input
//             type="tel"
//             name="nomorHP"
//             required
//             placeholder="Masukkan nomor HP aktif"
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           />
//         </div>

//         {/* Email */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Email (opsional)</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Masukkan email aktif"
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           />
//         </div>

//         {/* Kontak Darurat */}
//         <div data-aos="fade-right" data-aos-duration="1000">
//           <label>Kontak Darurat *</label>
//           <select
//             name="kontakDarurat"
//             required
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           >
//             <option value="">Pilih kontak darurat</option>
//             <option value="Orang Tua Kandung">Orang Tua Kandung</option>
//             <option value="Suami">Suami</option>
//             <option value="Istri">Istri</option>
//             <option value="Saudara Kandung">Saudara Kandung</option>
//             <option value="Anak">Anak</option>
//             <option value="Family">Family</option>
//           </select>
//         </div>

//         {/* Nama BIB */}
//         <div data-aos="fade-left" data-aos-duration="1000">
//           <label>Nama BIB *</label>
//           <input
//             type="text"
//             name="namaBIB"
//             required
//             placeholder="Masukkan nama BIB"
//             style={{
//               width: "100%",
//               padding: "0.75rem",
//               borderRadius: "10px",
//               border: "1px solid #ccc",
//               marginTop: "0.5rem",
//             }}
//           />
//         </div>

//         {/* Checklist Pernyataan */}
//         <div
//           style={{
//             gridColumn: "1 / -1", // full width
//             marginTop: "1rem",
//           }}
//           data-aos="fade-up"
//           data-aos-duration="1000"
//         >
//           <label
//             style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
//           >
//             <input type="checkbox" name="pernyataan" required />
//             Saya menyatakan bahwa segala sesuatu yang terjadi selama race adalah
//             tanggung jawab saya pribadi (bukan panitia penyelenggara).
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
//             className="button button--flex"
//             style={{
//               backgroundColor: "#000",
//               color: "#fff",
//               padding: "0.75rem 2rem",
//               borderRadius: "10px",
//               border: "none",
//               cursor: "pointer",
//               fontSize: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             Kirim Pendaftaran
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Contact;
