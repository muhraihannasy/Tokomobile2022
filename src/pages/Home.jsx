import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

// Images
import phone1 from "../assets/images/home/Phone1_home.png";
import dashboard from "../assets/images/home/dashboard.png";
import ListDescription from "../components/ListDescription";
import line from "../assets/images/icon/line.png";
import defaultProfile from "../assets/images/home/default.png";

// --- partner --- //
import partner1 from "../assets/images/partner/image2.png";
import partner2 from "../assets/images/partner/image3.png";
import partner3 from "../assets/images/partner/image4.png";
import partner4 from "../assets/images/partner/image5.png";

// --- liputan --- //
import liputan1 from "../assets/images/liputan/image6.png";
import liputan2 from "../assets/images/liputan/image7.png";
import liputan3 from "../assets/images/liputan/image8.png";
import liputan4 from "../assets/images/liputan/image9.png";
import liputan5 from "../assets/images/liputan/image10.png";
import liputan6 from "../assets/images/liputan/image11.png";
import liputan7 from "../assets/images/liputan/image12.png";

// Components
import CardPricing from "../components/CardPricing";
import ImageGroup from "../components/ImageGroup";
import FloatWa from "../components/FloatWa";

const Home = () => {
  const listData1 = [
    "Kelola pesanan, pembayaran dengan 1 dashboard",
    "Kelola pelanggan dan grup pelanggan dengan diskon bertingkat",
    "Laporan yang lengkap mulai dari penjualan, pembayaran, produk dan stok",
    "Tanpa batasan produk dan foto gambar",
    "Fitur autocancel pesanan belum lunas ",
    "Metode pengiriman dengan ekspedisi, kurir toko maupun pickup",
    "Metode pembayaran transfer, atau payment gateway Xendit dan Midtrans",
    "Ubah warna tema dari dashboard sesuai dengan personalisasi Toko Anda",
  ];

  //   const listData2 = [
  //     {
  //       title: "Starter",
  //       description: "",
  //       for: "Anda yang baru memulai",
  //       fitur: {
  //         correct: [
  //           "Jumlah produk dan pelanggan tak terbatas",
  //           "Pesanan tak terbatas",
  //           "Fitur semua ekspedisi",
  //           "Aktivasi payment gateway Xendit dan Midtrans",
  //           "1 User (pengguna)",
  //         ],
  //         reject: [
  //           "Autocancel pesanan belum lunas",
  //           "Belum Gratis Domain Sendiri",
  //         ],
  //       },
  //       price: "99.000",
  //       saving: "990.000",
  //       optional: "",
  //       textBtn: "Berlangganan Starter",
  //       color: "#F1F1F1",
  //       bgTag: "#D9D9D9",
  //       shadow: false,
  //     },
  //     {
  //       title: "Bisnis",
  //       description:
  //         "*Domain gratis berlaku untuk pembelian paket berlangganan selama 12 bulan, tersedia dalam ekstensi .com dan .id",
  //       for: "Rekomendasi",
  //       fitur: {
  //         correct: [
  //           "Semua fitur pada paket Starter",
  //           "Autocancel pesanan belum lunas",
  //           "Manajemen user hingga 5 pengguna",
  //           "Laporan lengkap, mulai penjualan hingga stok barang",
  //           "*Gratis nama domain sendiri, misalkan : tokokamu.com",
  //         ],
  //         reject: ["Aplikasi Android Playstore"],
  //       },
  //       price: "229.000",
  //       saving: "2.290.000",
  //       optional: "",
  //       textBtn: "Berlangganan Bisnis",
  //       color: "#FFFFFF",
  //       bgTag: "#3EBB8D",
  //       shadow: true,
  //     },
  //     {
  //       title: "Enterprise",
  //       description:
  //         "*Domain gratis berlaku untuk pembelian paket berlangganan selama 12 bulan, tersedia dalam ekstensi .com dan .id",
  //       for: "Toko Besar",
  //       fitur: {
  //         correct: [
  //           "Semua fitur pada paket Bisnis",
  //           "Manajemen user hingga 20 pengguna atau lebih (request)",
  //           "*Gratis nama domain sendiri, misalkan : tokokamu.com",
  //           "Aplikasi Android Play Store",
  //           "Integrasi API",
  //         ],
  //         reject: [
  //           "Autocancel pesanan belum lunas",
  //           "Belum Gratis Domain Sendiri",
  //         ],
  //       },
  //       price: "",
  //       saving: "",
  //       optional: "Hubungi kami",
  //       textBtn: "Berlangganan Bisnis",
  //       color: "#EEC04F",
  //       bgTag: "#F5F5F5",
  //       shadow: false,
  //     },
  //   ];

  const listData3 = [
    {
      name: "Anisa Purwanti",
      tokoUrl: "anisahijab.id",
      description:
        "“Keren sih Tokomobile ini, pakainya gak ribet, membantu banget bagi saya yang cuma nyambi Olshop tiap hari, sukses selalu Tokomobile”",
    },
    {
      name: "Yulianti Safitri",
      tokoUrl: "mycollection.id",
      description:
        "“Super.. super.. mudah pakai Tokomobile, jadinya sekarang menajemen Toko online saya lebih baik, reseller-reseller juga happy order lewat Tokomobile, thank you”",
    },
    {
      name: "Kiki Ramadhani",
      tokoUrl: "sepatuimpormurah.com",
      description:
        "“Pakai Tokomobile urusan orderan jadi lebih cepet, ga perlu rekap-rekap lagi di excel, CS nya ramah bantuin pas upload produk, mantapp..”",
    },
    {
      name: "Ricky Abraham",
      tokoUrl: "acchapemurah.com",
      description:
        "“Konter-konter HP ordernya via website dari Tokomobile, jadi lumayan banget ngebantu list orderan, sukseslah”",
    },
    {
      name: "Titi nafadian",
      tokoUrl: "grosirdastersby.com",
      description:
        "“Puas pakai tokomobile, CS nya juga super ramah buat ngajarin saya yg bawel ini hehe,, fiturnya tambahin lagi donk ya, sukses slalu”",
    },
  ];

  const listData4 = [partner1, partner2, partner3, partner4];
  const listData5 = [
    liputan1,
    liputan2,
    liputan3,
    liputan4,
    liputan5,
    liputan6,
    liputan7,
  ];

  return (
    <main>
      {/* Floating Whatsapp */}
      <FloatWa />

      <section className="text-white lg:h-[20rem] h-[40rem]">
        <div className="bg-primary pb-[2rem] lg:h-full h-[30rem]">
          <div className="max-w-5xl mx-auto px-8 flex lg:flex-row flex-col justify-between relative">
            <div className="pt-5">
              <h1 className="w-[15rem] text-[20px]">
                Buat Toko Online Anda dalam{" "}
                <span className="font-bold">30 detik</span> saja
              </h1>
              <p className="text-[12px] lg:pr-[0] lg:w-[12rem] w-full mb-[1.5rem] mt-[0.8rem]">
                Tokomobile siap membantu bisnis onlinemu lebih produktif dan
                efisien
              </p>
              <Button path="/" bg="secondary" color="white">
                Buat Toko Sekarang
              </Button>
            </div>
            <div className="lg:absolute  lg:right-[11rem] lg:top-[-1.5rem]">
              <img
                src={phone1}
                alt=""
                className="lg:w-[425px] w-[20rem] mx-auto mt-[3rem]   "
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="lg:hidden absolute left-[20%] right-[20%] top-[19rem] ">
          <img src={phone1} alt="" className="lg:w-[425px] block w-[20rem]" />
        </div>
      </section> */}
      <section>
        <div className="text-black max-w-5xl mx-auto w-full pb-[1rem] lg:mt-[1.5rem]  px-8 flex flex-col gap-4 mt-[1.5rem] mb-[1.5rem]">
          <p className="text-[1rem] lg:w-[21rem]">
            Menjadi bagian sukses berikutnya dari ribuan penjual online yang
            telah menggunakan{" "}
            <span className="text-primary_dark">Tokomobile</span>
          </p>
          <p className="text-[12px] lg:w-[21rem]">
            Berpengalaman <span className="font-bold">sejak 2014</span> dalam
            aplikasi online shop, kini Platform Tokomobile telah diperbarui dan
            semakin mudah digunakan.
          </p>
          <p className="text-[1rem] lg:w-[21rem] text-primary_dark">
            Coba versi baru Tokomobile selama 14 hari. Gratis
          </p>
        </div>
      </section>

      <section>
        <div className="container lg:mt-[5rem]">
          <div className="flex justify-center">
            <img
              src={line}
              alt=""
              className="h-[0.1rem] translate-y-[1.2rem] lg:block hidden"
            />
            <h3 className="text-primary_dark text-center mb-[2rem] lg:w-[367px]">
              Dashboard yang memudahkan operasional penjualan online Anda
            </h3>
            <img
              src={line}
              alt=""
              className="h-[0.1rem] translate-y-[1.2rem] lg:block hidden"
            />
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:place-items-center">
            <img
              src={dashboard}
              alt="gambar dashboard Tokomobile"
              className=" translate-x-[-3rem] xl:w-full mb-[1.2rem] xl:translate-x-[-5rem]"
            />
            <ListDescription items={listData1} icon="correct" />
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-[1rem]">
          <h3 className="text-primary_dark text-center mb-[3rem] ">
            Biaya lebih bersahabat dengan fitur lebih baik
          </h3>
          <CardPricing />
        </div>
      </section>

      <section>
        <div className="container mt-[3rem] ">
          <h3 className="text-primary_dark text-center mb-[3rem] ">
            Apa kata mereka yang lebih dulu pakai Tokomobile
          </h3>

          <div className="flex lg:justify-evenly lg:gap-5 gap-10 lg:pb-0 pb-[1rem] lg:overflow-x-hidden overflow-x-scroll ">
            {listData3.map((item, index) => {
              const { name, tokoUrl, description } = item;

              return (
                <div key={index} className="flex items-center flex-col gap-4">
                  <div className="photo w-[142px]">
                    <img src={defaultProfile} alt="" />
                  </div>

                  <div className="flex items-center flex-col ">
                    <h2>{name}</h2>
                    <h2 className="text-primary">{tokoUrl}</h2>
                    <p className="mt-[20px] text-center font-italic text-[11px] text-[#666666] w-[151px]">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-[8rem]">
          <h3 className="text-primary_dark text-center mb-[2rem] ">
            Partner dan kolaborasi
          </h3>
          <ImageGroup items={listData4} />
        </div>
      </section>
      <section>
        {/* <div className="container mt-[5rem] mb-[5rem]">
          <h3 className="text-primary_dark text-center mb-[2rem] ">
            Telah diliput oleh
          </h3>
          <ImageGroup items={listData5} />
        </div> */}
      </section>
    </main>
  );
};

export default Home;
