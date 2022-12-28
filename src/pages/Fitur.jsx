import {MdPayments} from "react-icons/md"
import {TbTruckDelivery} from  "react-icons/tb";

// Images
import device2Icn from "../assets/images/icon/devices2.png";
import deliveryIcn from "../assets/images/icon/delivery.png";
import moneyIcn from "../assets/images/icon/money.png";
import managemenIcn from "../assets/images/icon/Managemen.png";
import dashboardIcn from "../assets/images/icon/dashboard.png";
import deliveryTrackingIcn from "../assets/images/icon/delivery_tracking.png";
import reportIcn from "../assets/images/icon/Report.png";
import customerServiceIcn from "../assets/images/icon/customer_service.png";
import line from "../assets/images/icon/line.png";
import correctIcn from "../assets/images/icon/correct.png";
import kelolaIcn from "../assets/images/icon/kelola.png";
import katalogIcn from "../assets/images/icon/katalog.png";
import dashboardiIcn from "../assets/images/icon/dashboard_i.png";
import challengesIcn from "../assets/images/icon/challenges.png";
import reportkIcn from "../assets/images/icon/report_k.png";
import trackIcn from "../assets/images/icon/track.png";
import youtubeIcn from "../assets/images/icon/youtube.png";
import teamIcn from "../assets/images/icon/team.png";

import hand from "../assets/images/fitur/hand.png";
import dummyPengaturan from "../assets/images/fitur/dummy-Pengaturan.png";
import market1 from "../assets/images/marketplace/market1.png";
import market2 from "../assets/images/marketplace/market2.png";
import market3 from "../assets/images/marketplace/market3.png";
import market4 from "../assets/images/marketplace/market4.png";
import market5 from "../assets/images/marketplace/market5.png";
import market6 from "../assets/images/marketplace/market6.png";
import market7 from "../assets/images/marketplace/market7.png";

// Components
import Button from "../components/Button";
import ImageGroup from "../components/ImageGroup";
import FloatWa from "../components/FloatWa";

const Fitur = () => {
  const listData1 = [
    market1,
    market2,
    market3,
    market4,
    market5,
    market6,
    market7,
  ];
  return (
    <main>
      {/* Floating Whatsapp */}
      <FloatWa />

      <section>
        <div className="container flex lg:flex-row flex-col flex-wrap lg:gap-10 gap-3 py-[2rem]">
          <div className="xl:pl-[6rem] text-[#666666] ">
            <h2 className="text-[2rem] font-medium lg:w-[400px] mb-[1rem]">
              Bawa Bisnis Bersamamu, Pantau Kapan dan Dimana Saja
            </h2>
            <p className="text-[14px] lg:w-[300px] mb-[1.5rem]">
              Kelola bisnis anti ribet menggunakan aplikasi dalam satu genggaman
              tangan.
            </p>
            <a
              href="https://dashboard.tokomobile.com/register"
              className="font-bold  py-[0.5rem] text-[0.8rem] px-6 rounded-[0.2rem] text-center w-max bg-secondary text-white"
            >
              Buat Toko Sekarang
            </a>
          </div>

          <div className="lg:w-[50%] w-full flex lg:flex-wrap lg:justify-center items-center gap-4 text-white xl:translate-y-[3rem] lg:overflow-x-auto overflow-x-scroll py-6">
            <div className="bg-primary_dark rounded-lg flex items-center justify-center flex-col px-5 py-5 h-[188px] w-[188px]">
              <div className="flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                <img src={device2Icn} alt="" className="w-[30px]" />
              </div>
              <h2 className="w-[120px] text-center mt-[1rem]">
                Responsive di semua device
              </h2>
            </div>

            <div className="bg-primary_dark rounded-lg flex items-center justify-center flex-col px-5 py-5 h-[188px] w-[188px]">
              <div className="flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                <img src={moneyIcn} alt="" className="w-[30px]" />
              </div>
              <h2 className="w-[120px] text-center mt-[1rem]">
                Payment Gateway
              </h2>
            </div>

            <div className="bg-primary_dark rounded-lg flex items-center justify-center flex-col px-5 py-5 h-[188px] w-[188px]">
              <div className="flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                <img src={deliveryIcn} alt="" className="w-[30px]" />
              </div>
              <h2 className="w-[120px] text-center mt-[1rem]">
                Mutu <br /> Ekspedisi
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F1F1] mt-[2rem]">
        <div className="bg-white w-full lg:hidden">
          <h2 className="font-medium text-[18px] text-center text-primary mb-[3rem]">
            Fitur Tokomobile
          </h2>
          <img src={hand} alt="" className="w-[80%] translate-x-[2rem]" />
        </div>

        <div className="container overflow-y-hidden items-center lg:flex lg:gap-20 py-10">
          <div className="w-full lg:block hidden w-[50rem] translate-y-[3rem]">
            <img src={hand} alt="" />
          </div>
          <div>
            <div className="flex flex-col items-center justify-center gap-2 w-max mx-auto mb-[2.5rem] invisible lg:visible">
              <h2 className="font-medium text-[18px] text-center text-primary">
                Fitur Tokomobile
              </h2>
              <span className="block w-[54%] h-[0.2rem] bg-[#D9D9D9]"></span>
            </div>
            <div className="grid lg:grid-cols-3  grid-cols-2 h-max gap-10 ">
              <div>
                <div className="w-max flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                  <img src={dashboardIcn} alt="" className="w-[30px]" />
                </div>
                <h2 className="font-semibold mt-[0.8rem] mb-[0.2rem] text-[#666666]">
                  Dashboard
                </h2>
                <p className="text-[#666666]">
                  Kelola pesanan, pembayaran dengan 1 dashboard
                </p>
              </div>
              <div>
                <div className="w-max flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                  <img src={managemenIcn} alt="" className="w-[30px]" />
                </div>
                <h2 className="font-semibold mt-[0.8rem] mb-[0.2rem] text-[#666666]">
                  Management Produk
                </h2>
                <p className="text-[#666666]">
                  Tanpa batasan produk dan foto gambar
                </p>
              </div>
              <div>
                <div className="w-max flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                  <img src={deliveryTrackingIcn} alt="" className="w-[30px]" />
                </div>
                <h2 className="font-semibold mt-[0.8rem] mb-[0.2rem] text-[#666666]">
                  Proses Pengiriman
                </h2>
                <p className="text-[#666666]">
                  Metode pengiriman dengan ekspedisi, kurir toko & pickup
                </p>
              </div>
              <div>
                <div className="w-max flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                  <img src={device2Icn} alt="" className="w-[30px]" />
                </div>
                <h2 className="font-semibold mt-[0.8rem] mb-[0.2rem] text-[#666666]">
                  Responsive
                </h2>
                <p className="text-[#666666]">
                  Responsive di semua device desktop maupun smartphone
                </p>
              </div>
              <div>
                <div className="w-max flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                  <img src={reportIcn} alt="" className="w-[30px]" />
                </div>
                <h2 className="font-semibold mt-[0.8rem] mb-[0.2rem] text-[#666666]">
                  Analysis Report
                </h2>
                <p className="text-[#666666]">
                  Analisa bisnis kapanpun kamu membutuhkannya
                </p>
              </div>
              <div>
                <div className="w-max flex items-center justify-center bg-[#D2FAEB] rounded-lg px-4 py-4">
                  <img src={customerServiceIcn} alt="" className="w-[30px]" />
                </div>
                <h2 className="font-semibold mt-[0.8rem] mb-[0.2rem] text-[#666666]">
                  User
                </h2>
                <p className="text-[#666666]">
                  Kelola semua produkmu kapan dan dimana saja
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:bg-primary  overflow-hidden">
        <div className="container relative bg-primary lg:h-max pb-8 lg:mt-0">
          <div className="flex justify-center gap-5 lg:mt-[2.5rem]">
            <img
              src={line}
              alt=""
              className="h-[0.1rem] translate-y-[1.2rem] hidden lg:block"
            />
            <h2 className="text-white text-center mb-[3rem] md:w-[367px] lg:pt-[0] pt-[3rem] ">
              Nikmati Keuntungan dari Berbagai Fitur Utama Tokomobile dalam
              Genggaman Tangan
            </h2>
            <img
              src={line}
              alt=""
              className="h-[0.1rem] translate-y-[1.2rem] hidden lg:block"
            />
          </div>

          <div className="flex lg:flex-row lg:translate-x-[6rem] justify-end flex-col gap-4">
            <div className="lg:hidden">
              <img
                src={dummyPengaturan}
                alt=""
                className="md:w-full w-[40rem]"
              />
            </div>

            <div className="flex flex-col gap-2 bg-white rounded-lg py-6 px-6 lg:w-[658px]">
              <div>
                <div className="flex items-center gap-4">
                  <img src={correctIcn} alt="" className="w-[24px]" />
                  <h2 className="text-[18px] font-medium text-[#666666]">
                    Pemrosesan Pesanan Cerdas
                  </h2>
                </div>
                <p class="text-[14px] text-[#666666] pl-[2.5rem]">
                  Kelola semua pesanan dari berbagai marketplace kapan dan
                  dimana saja. Transaksi penjualan dapat dilihat dalam hitungan
                  detik!
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <img src={correctIcn} alt="" className="w-[24px]" />
                  <h2 className="text-[18px] font-medium text-[#666666]">
                    Lihat Detail & Daftar Produk
                  </h2>
                </div>
                <p class="text-[14px] text-[#666666] pl-[2.5rem]">
                  Cek status semua produkmu beserta detailnya dari semua channel
                  yang kamu punya.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <img src={correctIcn} alt="" className="w-[24px]" />
                  <h2 className="text-[18px] font-medium text-[#666666]">
                    Analisis Bisnis Menyeluruh dari Dashboard
                  </h2>
                </div>
                <p class="text-[14px] text-[#666666] pl-[2.5rem]">
                  Dapatkan analisa bisnis kapanpun kamu membutuhkannya, bantu
                  membuat strategi bisnis yang lebih baik
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <img src={correctIcn} alt="" className="w-[24px]" />
                  <h2 className="text-[18px] font-medium text-[#666666]">
                    Bisnis multi channel
                  </h2>
                </div>
                <p class="text-[14px] text-[#666666] pl-[2.5rem]">
                  Ambil kendali penuh atas laporan analisis bisnis yang
                  komprehensif & proses pesanan kapanpun dimanapun
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <img src={correctIcn} alt="" className="w-[24px]" />
                  <h2 className="text-[18px] font-medium text-[#666666]">
                    <span className="text-red-500">Coming soon </span>
                    Ikat Toko dengan Nyaman
                  </h2>
                </div>
                <p class="text-[14px] text-[#666666] pl-[2.5rem]">
                  Lebih fleksibel untuk mengintegrasikan semua toko di berbagai
                  marketplace dengan satu klik
                </p>
              </div>
            </div>

            <div className="lg:translate-y-0 hidden lg:block w-[690px]">
              <img src={dummyPengaturan} alt="" className="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-[3rem]">
          <h2 className="text-primary text-center lg:mb-0 mb-[3rem] ">
            Detail Fitur Tokomobile
          </h2>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:mt-[2rem] gap-6">
            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                <img src={dashboardiIcn} alt="" className="w-[25px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Dashboard
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Tokomobile menyediakan tampilan atau panel yang menampilkan
                  data dan informasi secara sistematis dan terorganisir.
                  Dashboard ini bertujuan untuk memberikan pandangan cepat dan
                  mudah dicerna tentang kondisi atau situasi penjualan terkini.
                  Kami menyajikan data dalam bentuk grafik atau diagram yang
                  mudah dipahami dan menampilkan informasi yang penting dan
                  relevan untuk membantu pengambilan keputusan.
                </p>
              </div>
            </div>
            
            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                <img src={katalogIcn} alt="" className="w-[25px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Management Produk
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Anda dapat membuat sebuah daftar atau koleksi dari beberapa
                  variasi atau opsi yang tersedia dari suatu produk atau
                  layanan. Contoh katalog multi variasi dapat berupa daftar
                  warna, ukuran, atau fitur yang tersedia dari suatu produk,
                </p>
              </div>
            </div>

            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                {/* <img src={teamIcn} alt="" className="w-[25px]" /> */}
                 <TbTruckDelivery className="text-[#51b08e] text-[2rem]" />

                
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Proses Pengiriman
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Integrasi biaya pengiriman ekspedisi Indonesia adalah proses
                  menghubungkan sistem pengiriman ekspedisi dengan sistem
                  informasi atau aplikasi yang digunakan oleh tokomobile. Dengan
                  integrasi biaya pengiriman ekspedisi, Anda dapat dengan mudah
                  mengetahui harga pengiriman yang ditawarkan oleh ekspedisi,
                  sesuai dengan lokasi pengiriman, jenis barang yang dikirim,
                  dan jenis layanan yang dipilih. Dan menampilan informasi
                  terkait biaya pengiriman, waktu pengiriman, dan status
                  pengiriman barang.
                </p>
              </div>
            </div>

            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                <img src={reportkIcn} alt="" className="w-[25px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Analysis Report
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Tokomobile menyediakan laporan dan informasi yang lengkap dan
                  detail. Pada Laporan berisi data yang akurat dan terperinci
                  tentang penjualan meliputi informasi tentang produk yang
                  paling laris dijual serta waktu yang dapat di tentukan.
                </p>
              </div>
            </div>
            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                <img src={teamIcn} alt="" className="w-[25px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">User</h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Fitur multi pengguna adalah sebuah sistem atau program yang
                  dapat digunakan oleh banyak orang secara bersamaan. Sistem
                  multi pengguna dapat menjadi sangat efisien karena dapat
                  digunakan oleh banyak orang secara bersamaan. Anda dapat
                  memasukan karyawan atau admin untuk mengelola toko Anda
                </p>
              </div>
            </div>
            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                <img src={kelolaIcn} alt="" className="w-[25px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Kelola Pesanan
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Tokomobile memiliki sistem terintegrasi yang dapat membantu
                  serta memudahkan dalam mengelola pesanan dengan cepat dan
                  lebih efisien untuk pesanan yang masuk. Semua pesanan dapat
                  anda lacak dan atur dengan baik.
                </p>
              </div>
            </div>
            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                {/* <img src={trackIcn} alt="" className="w-[25px]" />
                 */}
                 <MdPayments className="text-[#51b08e] text-[2rem]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Multi payment
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Multi Payment adalah fitur yang memungkinkan pelanggan untuk
                  membayar dengan lebih dari satu metode pembayaran dalam satu
                  transaksi. Fitur multi payment sangat berguna bagi pelanggan
                  karena memungkinkan mereka untuk membayar dengan cara yang
                  paling nyaman bagi mereka. Selain itu, fitur ini juga
                  bermanfaat bagi penjual karena dapat meningkatkan tingkat
                  pembayaran dan mengurangi risiko tidak terbayarnya transaksi.
                </p>
              </div>
            </div>

            <div className="flex items-start px-4 py-3 gap-4 bg-[#F5F5F5] rounded-lg pb-[2rem]">
              <div className="bg-[#D2FAEB] flex items-center justify-center w-[61px] h-[61px] flex-2 rounded-lg">
                <img src={challengesIcn} alt="" className="w-[25px]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] lg:text-[20px] font-medium">
                  Auto Cancel
                </h3>
                <p className="text-[12px] lg:text-[1rem] mt-[0.2rem]">
                  Fitur Auto Cancel / Pembatalan otomatis pesanan adalah proses
                  yang menghapus atau membatalkan pesanan secara otomatis jika
                  terjadi kondisi tertentu. Contohnya, pembatalan otomatis
                  pesanan dapat dilakukan jika pesanan tersebut tidak dapat
                  diproses dalam waktu tertentu, jika terdapat kesalahan dalam
                  pesanan, atau jika stok barang yang dipesan habis. Pembatalan
                  otomatis pesanan dapat sangat berguna dalam mengelola pesanan
                  secara efisien dan memastikan bahwa pelanggan tidak menunggu
                  terlalu lama untuk pesanan yang tidak dapat dipenuhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-[3rem]">
          <h2 className="text-red-400 text-center lg:mb-0  ">Comming Soon</h2>
          <p className="text-center text-[12px] mb-[2rem] mt-[0.2rem]">
            Terintegrasi dengan Marketplace Terkemuka di Indonesia
          </p>

          <ImageGroup items={listData1} />
        </div>
      </section>
    </main>
  );
};

export default Fitur;
