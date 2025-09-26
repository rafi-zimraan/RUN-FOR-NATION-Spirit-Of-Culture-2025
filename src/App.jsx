import React from "react";
import logo from "./assets/icons/iconYahyaRunner.png";
import HumanRun from "./assets/icons/runnner.png";

export default function App() {
  return (
    <div className="bg-white text-[#014a91] overflow-x-hidden font-sans">
      <header className="flex justify-between ">
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Run For Nation Logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>
        <nav className="flex space-x-6 text-base md:text-lg font-semibold">
          <a href="#about" className="hover:text-[#f0ff01] transition">
            About
          </a>
          <a href="#form" className="hover:text-[#f0ff01] transition">
            Daftar
          </a>
        </nav>
      </header>

      {/* <section className="flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-32 min-h-screen bg-gray-50">
        <img
          src={HumanRun}
          alt="Run For Nation"
          className="h-32 md:h-40 mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-extrabold">
          <span className="text-[#014a91]">Run For Nation 2025</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Spirit of Culture — Join us in celebrating unity through running.
        </p>
      </section>
      <section id="about" className="py-16 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            About the Event
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-semibold">
              Run For Nation: Spirit of Culture
            </span>{" "}
            adalah ajang Fun Run 6,2K yang menghadirkan perpaduan olahraga,
            budaya, dan kebersamaan, diselenggarakan di Pontianak...
          </p>
        </div>
      </section>
      <section
        id="form"
        className="bg-gray-50 py-16 px-6 md:px-12 border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Formulir Pendaftaran
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Nama Lengkap *</label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Jenis Kelamin *
              </label>
              <div className="flex space-x-4 mt-2">
                <label>
                  <input type="radio" name="gender" value="Laki-laki" />{" "}
                  Laki-laki
                </label>
                <label>
                  <input type="radio" name="gender" value="Perempuan" />{" "}
                  Perempuan
                </label>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Tempat, Tanggal Lahir *
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Usia *</label>
              <input
                type="number"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Nomor HP/WA *</label>
              <input
                type="tel"
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Email (Opsional)
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">
                Alamat Lengkap *
              </label>
              <textarea
                required
                className="w-full border rounded-lg px-4 py-2"
                rows={3}
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-1">Ukuran Kaos *</label>
              <select required className="w-full border rounded-lg px-4 py-2">
                <option value="">Pilih ukuran</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Upload KTP *</label>
              <input type="file" required className="w-full" />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Upload Foto Terbaik *
              </label>
              <input type="file" required className="w-full" />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block">
                <input type="checkbox" required /> Saya menyetujui ketentuan
                pendaftaran
              </label>
              <label className="block">
                <input type="checkbox" required /> Data yang saya isi adalah
                benar
              </label>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#014a91] text-white font-bold rounded-lg hover:bg-[#023d74] transition"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-[#014a91] text-center py-6 mt-10 text-white">
        <p>&copy; 2025 Run For Nation. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
}
