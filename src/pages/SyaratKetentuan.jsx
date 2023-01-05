import React from "react";
import { Link } from "react-router-dom";
import FloatWa from "../components/FloatWa";

const SyaratKetentuan = () => {
  return (
    <main>
      {/* Floating Whatsapp */}
      <FloatWa />

      <section>
        <div className="container mt-[2rem] py-[5rem]">
          <h2 className="text-center font-semibold text-[1.5rem] mb-[1.5rem]">
            Syarat dan Ketentuan
          </h2>

          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">1. Pendahuluan</h2>
            <p className="leading-relaxed pl-3">
              Syarat dan ketentuan ini diperuntukkan bagi pengguna Tokomobile,
              baik bagi pengguna berbayar maupun pengguna dengan masa percobaan
              (trial), dimana pengguna ini adalah semua pengguna yang terdaftar
              dalam akun Tokomobile. Para (pengguna) diharapkan membaca dan
              mematuhi segala syarat dan ketentuan yang berlaku dibawah ini.{" "}
            </p>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">
              2. Penggunaan dan aksesbilitas ke platform Tokomobile
            </h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Akses terhadap konten, pengguna dan pengunjung dapat mengakses
                informasi mengenai Tokomobile melalui website tokomobile.co.id
              </li>
              <li>
                Batasan regional, website Tokomobile (tokomobile.co.id) dapat
                diakses melalui internet tanpa batasan regional maupun
                Geolocation IP
              </li>
              <li>
                Batasan usia, website Tokomobile dapat diakses tanpa ada batasan
                usia, namun bagi pengguna terdaftar wajib telah berusia minimal
                17 tahun
              </li>
              <li>
                Akses informasi kontak dan bantuan, pengguna Tokomobile dapat
                mengakses informasi kontak pada website Tokomobile, melalui
                kanal Telepon, Email dan Whatsapp dan akan tersedia pada hari
                kerja efektif Tokomobile Senin-Jumat (09.00 - 17.00) dan Sabtu
                (09.00 - 13.00)
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">3. Ketentuan berlangganan</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Mekanisme berlangganan, Tokomobile merupakan platform bersifat
                SaaS (Software as a service), dimana pengguna dapat menggunakan
                fitur Tokomobile dengan cara berlangganan dengan beberapa
                pilihan Paket
              </li>
              <li>
                Masa percobaan, setiap pembuatan akun Tokomobile (akun toko)
                akan diberikan masa percobaan (trial) selama 14 hari. Setelah
                masa trial berakhir maka akun akan tersuspend dan pengguna dapat
                mengaktifkan akun dengan membeli paket berlangganan sesuai
                dengan paket yang tersedia
              </li>
              <li>
                Paket berlangganan, Tokomobile menyediakan beberapa paket
                berlangganan dengan periode penagihan atau masa aktif perbulan
                dan pertahun, informasi paket berlangganan dapat dilihat pada
                link{" "}
                <Link className="underline font-semibold" to="/harga">
                  https://tokomobile.co.id/harga
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">4. Pembayaran</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Cara pembayaran, pembayaran berlangganan dapat dilakukan dengan
                beberapa metode pembayaran online, seperti Virtual Account,
                E-Wallet dan QRIS
              </li>
              <li>
                Batas waktu pembayaran adalah 1x24 setelah order dilakukan
              </li>
              <li>
                Pembayaran akan terkonfirmasi otomatis maksimal 1x24 jam setelah
                pengguna melakukan pembayaran
              </li>
              <li>
                Pengguna dapat melakukan konfirmasi melalui email {""}
                <a
                  href="mailto:info@tokomobile.co.id"
                  className="font-semibold underline"
                >
                  info@tokomobile.co.id
                </a>{" "}
                jika pembayaran belum terkonfirmasi otomatis lebih dari 24 jam
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">5. Pelanggaran dan Sanksi</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Tokomobile berhak melakukan sanksi, berupa teguran maupun hingga
                penutupan akun pada pengguna akun Tokomobile bila melanggar
                ketentuan-ketentuan yang tidak diperbolehkan selama menggunakan
                platform Tokomobile, diantaranya
              </li>
              <li>
                Konten berbau SARA, dilarang menggunggah dan memberikan
                informasi dengan memanfaatkan platform Tokomobile dengan konten
                dan informasi yang berbau SARA
              </li>
              <li>
                Produk ilegal, dilarang menggunakan platform Tokomobile untuk
                media penjualan produk-produk ilegal
              </li>
              <li>
                Produk melanggar hukum, dilarang menggunakan platform Tokomobile
                untuk mendia penjualan produk-produk yang melanggar Hukum,
                seperti minuman keras tanpa izin resmi, narkoba/obat terlarang,
                perdagangan anak, prostitusi, dsb
              </li>
              <li>
                Produk replika / KW / palsu, dilarang menggunakan platform
                Tokomobile untuk media penjualan produk-produk replika, KW atau
                palsu, yang dapat mengundang pemilik merek otentik dapat
                menggugat secara hukum atas hak kekayaan intelektual properti
              </li>
              <li>
                Penipuan, dilarang melakukan kegiatan penipuan, scam dan
                semacamnya dengan menggunakan platform Tokomobile
              </li>
              <li>
                Aktifitas tidak wajar, Bot dan semacamnya dilarang digunakan
                pada platform Tokomobile
              </li>
              <li>
                Sanksi, pengguna akun Tokomobile yang melakukan pelanggaran
                diatas, akan dikenakan sanksi teguran, penangguhan layanan
                sementara hingga penutupan akun (jika diperlukan).
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">6. Penangguhan layanan</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Penangguhan layanan dapat dilakukan oleh Tokomobile dengan
                beberapa kondisi sebagai berikut
              </li>
              <li>
                Masa berlangganan habis, akun akan ditangguhkan (suspend) jika
                paket berlangganan telah melewati masa aktif (expired)
              </li>
              <li>
                Melakukan salah satu pelanggaran poin 5, akun akan ditangguhkan
                (suspend) jika terdapat pelanggaran pada poin 5 dan pengguna
                mengabaikan sanksi teguran oleh pihak Tokomobile 1x24 jam
              </li>
              <li>
                Masa penangguhan layanan adalah selama-lamanya 30 hari sejak
                penangguhan dilakukan, sebelum dilakukan proses Terminasi atau
                penghapusan/penutupan akun secara permanen
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">7. Upgrade dan Downgrade</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Pengguna dapat melakukan upgrade dan downgrade paket sebelum
                masa paket yang aktif berakhir
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">8. Terminasi (penghapusan akun)</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Pihak Tokomobile akan/dapat melakukan terminasi akun Tokomobile,
                dengan beberapa kondisi sebagai berikut
              </li>
              <li>
                Melewati masa penangguhan, proses terminasi dilakukan jika akun
                Tokomobile tidak aktif dan telah melewati masa penangguhan
                (suspend) lebih dari 30 hari kalender
              </li>
              <li>
                Melakukan pelanggaran poin 5, proses terminasi dilakukan jika
                akun Tokomobile telah melalaikan sanksi peringatan lebih dari 7
                hari, sejak pelanggaran ditemukan.
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">
              9. Force Majeur (kejadian diluar kuasa)
            </h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Jika terdapat Kejadian diluar kuasa (force majeur) seperti
                bencana alam (banjir, tanah longsor, gempa bumi, kebakaran, dsb)
                yang dimana dapat mengganggu operasional platform Tokomobile,
                maka pihak Tokomobile akan menginformasikan selambat-lambatnya 7
                hari untuk pemulihan operasional secara maksimal, dan 30 hari
                untuk masa pemulihan.
              </li>
              <li>
                Pihak Tokomobile tidak dapat memberikan 100% atas pemulihan yang
                terjadi atas kejadin diluar kuasa (force majeur)
              </li>
            </ul>
          </div>
          <div className="mt-[1rem] text-[14px]">
            <h2 className="mb-[0.5rem]">10. Pembebasan Tuntutan Hukum</h2>
            <ul className="list-disc pl-7 leading-relaxed">
              <li>
                Pihak Tokomobile dibebaskan tuntutan secara hukum bila terjadi
                kerugian materiil dan non-materil, akibat
              </li>
              <li>
                Kesalahan pengguna, menginput, memodifikasi, menghapus segala
                data dan konten yang telah sepenuhnya menjadi informasi
                kerahasiaan pengguna
              </li>
              <li>
                Kelalaian dalam memberikan akses kerahasaian, seperti kata sandi
                yang disalahkan gunakan oleh pihak ketiga hingga memodifikasi
                konten didalamnya yang berelasi kepada akun pengguna tersebut.
              </li>
              <li>
                Kelalaian dalam mengabaikan syarat dan ketentuan, dan
                mengabaikan poin pelanggaran hingga proses terminasi harus
                dilakukan
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SyaratKetentuan;
