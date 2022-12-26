import { Link } from "react-router-dom/dist";

const Footer = () => {
  return (
    <footer className=" mt-[3rem] bg-slate-200 pt-10">
      <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="text-center md:text-left mb-[2rem]">
          <h2 className="text-primary font-bold text-[1.2rem] mb-[1rem]">
            Tokomobile
          </h2>
          <p className="text-[14px]">
            {" "}
            Platform e-commerce UMKM yang membantu para penjual online untuk
            dapat melakukan kegiatan berdagang online lebih mudah, hemat waktu
            dan efesien
          </p>
        </div>
        <div className="text-center md:text-left mb-[2rem]">
          <h2 className="text-primary font-bold text-[1.2rem] mb-[1rem]">
            Halaman
          </h2>
          <ul className="text-primary text-[14px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fitur">Fitur Tokomobile</Link>
            </li>
            <li>
              <Link to="/harga">Harga Paket</Link>
            </li>
            <li>
              <Link to="/syarat_ketentuan">Syarat dan ketentuan</Link>
            </li>
            <li>
              <Link to="/kebijakan_privasi">Kebijakan privasi</Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-[2rem]">
          <h2 className="text-primary font-bold text-[1.2rem] mb-[1rem]">
            Informasi Perusahaan
          </h2>
          <ul className="text-primary text-[14px]">
            <li>
              <Link to="tentang_kami">Tentang Kami</Link>
            </li>
            <li>
              <Link to="">Kontak Kami</Link>
            </li>
          </ul>
        </div>

        <div className="mb-[2rem]">
          <h2 className="text-primary font-bold text-[1.2rem] mb-[1rem]">
            Hubungi Kami
          </h2>
          <h3 className="text-primary_dark font-bold text-[1rem] mb-[0.5rem]">
            PT Novatama Solusi Teknologi
          </h3>
          <div className="mb-[0.5rem]">
            <h3 className="font-bold text-[#666666]">Bekasi</h3>
            <p className="text-[14px]">
              Ruko Rose Garden 1 No 30, Grand Galaxy City, Bekasi Jawa Barat
              17147
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#666666]">Yogyakarta</h3>
            <p className="text-[14px]">
              Ring Road Selatan No 64, Plumbon, Banguntapan, Bantun, Yogyakarta
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-6 text-center">
        Copyright @2022 PT Novatama Solusi Teknologi, All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
