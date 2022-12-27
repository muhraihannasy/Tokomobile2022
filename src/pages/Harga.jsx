import React, { useEffect, useState } from "react";
import CardPricing from "../components/CardPricing";

import correctIcn from "../assets/images/icon/correct.png";
import closeIcn from "../assets/images/icon/reject.png";
import Button from "../components/Button";
import FloatWa from "../components/FloatWa";

const Harga = () => {
  const [starterDetail, setStarterDetail] = useState(false);
  const [bisnisDetail, setBisnisDetail] = useState(false);
  const [enterpriseDetail, setEnterpriseDetail] = useState(false);

  useEffect(() => {
    // console.log(starterDetail);
  }, [starterDetail]);
  return (
    <main>
      {/* Floating Whatsapp */}
      <FloatWa />

      <section>
        <div className="container mt-[2rem]">
          <h2 className="text-primary font-medium text-[2rem] text-center mb-[5rem]">
            Harga Paket
          </h2>
          <div className="lg:block hidden">
            <CardPricing />
          </div>
        </div>
      </section>
      <section className="desktop lg:block hidden">
        <div className="container mt-[4rem]">
          <h2 className="text-primary text-[18px] font-medium text-center mb-[1rem]">
            Perbandingan Fitur
          </h2>
          <p className="text-[1rem] text-center lg:w-[324px] mx-auto">
            Bandingkan paket mana yang cocok dengan online shop Anda
          </p>

          <div className="flex gap-4 mt-[2.4rem]">
            <div class="w-full">
              <div className="bg-primary_dark px-4 text-white py-2 rounded-md ">
                <h2 className="text-center">FITUR</h2>
              </div>
              <div className="bg-[#F5F5F5] px-4 py-6 rounded-md mt-[1rem]">
                <ul className="text-[1rem] flex flex-col justify-center gap-6">
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Biaya Perbulan
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Jumlah Produk
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Jumlah Pelanggan
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Jumlah Pesanan
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Manajemen Katalog dengan muti variasi
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Gambar produk tak terbatas
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Manajemen stok produk
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Manajemen pelanggan dan grup pelanggan
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Atur diskon per grup pelanggan
                  </li>
                  <li className="w-[227px] h-[8rem] flex items-center">
                    Multi ekspedisi
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Cetak nota dan alamat pengiriman
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Notifikasi pesanan via Whatsapp
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Payment gateway pembayaran otomatis
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Resi pengiriman otomatis dan layanan Pickup by Shipper
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Katalog dan Pesanan Pre-order
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Aktivasi payment gateway Xendit dan Midtrans
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Autocancel pesanan belum lunas
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Gratis Domain Sendiri
                  </li>
                  <li className="w-[227px] h-[8rem] flex items-center">
                    Laporan
                  </li>
                  <li className="w-[227px] h-[2rem] flex items-center">
                    Aplikasi Android Toko Online di Google Play Store
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full">
              <div className="bg-primary_dark px-4 text-white py-2 rounded-md">
                <h2 className="text-center">STARTER</h2>
              </div>
              <div className="bg-[#F5F5F5] px-4 py-6 rounded-md mt-[1rem] ">
                <ul className="text-[1rem] flex flex-col gap-6 ">
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Rp199.000
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>

                  <li className="flex items-center justify-center text-center h-[8rem]">
                    JNE, TIKI, J&T, SICEPAT, RPX, POS, LION PARCEL, INDAH CARGO,
                    NINJA EXPRESS, WAHANA
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img src={closeIcn} alt="" className="w-[19px] h-[19px]" />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img src={closeIcn} alt="" className="w-[19px] h-[19px]" />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img src={closeIcn} alt="" className="w-[19px] h-[19px]" />
                  </li>
                  <li className="flex items-center justify-center text-center h-[8rem]">
                    Laporan Standar Penjualan, Pembayaran, Stok Export ke PDF
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img src={closeIcn} alt="" className="w-[19px] h-[19px]" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full">
              <div className="bg-primary_dark px-4 text-white py-2 rounded-md">
                <h2 className="text-center">BISNIS</h2>
              </div>
              <div className="bg-[#F5F5F5] px-4 py-6 rounded-md mt-[1rem]">
                <ul className="text-[1rem] flex flex-col gap-6 ">
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Rp229.000
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>

                  <li className="flex items-center justify-center text-center h-[8rem]">
                    JNE, TIKI, J&T, SICEPAT, RPX, POS, LION PARCEL, INDAH CARGO,
                    NINJA EXPRESS, WAHANA GRAB-SEND, GOSEND
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[8rem]">
                    Laporan Lengkap Penjualan, Pembayaran, Stok, Laba Rugi,
                    Pengeluaran Biaya Ekspedisi, Pesanan Pre-Order Export ke PDF
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img src={closeIcn} alt="" className="w-[19px] h-[19px]" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="w-full">
              <div className="bg-primary_dark px-4 text-white py-2 rounded-md">
                <h2 className="text-center">ENTERPRISE</h2>
              </div>
              <div className="bg-[#F5F5F5] px-4 py-6 rounded-md mt-[1rem]">
                <ul className="text-[1rem] flex flex-col gap-6 ">
                  <li className="flex items-center flex-col justify-center text-center h-[2rem]">
                    <span className="text-red-400">Comming Soon</span>
                    Hubungi Kami
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    Tak terbatas
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>

                  <li className="flex items-center justify-center text-center h-[8rem]">
                    JNE, TIKI, J&T, SICEPAT, RPX, POS, LION PARCEL, INDAH CARGO,
                    NINJA EXPRESS, WAHANA GRAB-SEND, GOSEND
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                  <li className="flex items-center justify-center text-center h-[8rem]">
                    Laporan Lengkap Penjualan, Pembayaran, Stok, Laba Rugi,
                    Pengeluaran Biaya Ekspedisi, Pesanan Pre-Order Export ke PDF
                  </li>
                  <li className="flex items-center justify-center text-center h-[2rem]">
                    <img
                      src={correctIcn}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile lg:hidden block">
        <div className="container mt-[4rem]">
          <div className="flex lg:flex-row flex-col lg:gap-0 sm:gap-15 gap-10 justify-center items-center flex-wrap">
            {/* Card Pricing */}
            <div className="relative bg-[#F1F1F1] rounded-md px-[2rem] pb-[1.5rem] sm:w-[320px] w-full h-max">
              <div className="mx-auto translate-y-[-15px] w-max px-5 rounded-md py-1 top-[-1rem] bg-[#D9D9D9] font-bold text-[#666666] text-[12px]">
                Anda yang baru mulai
              </div>
              <h2 className="text-center mt-[0px] font-bold text-[#666666]">
                Starter
              </h2>

              <div className="mt-[10px]">
                <ul>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Jumlah produk dan pelanggan tak terbatas
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Pesanan tak terbatas</p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Fitur semua ekspedisi</p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Aktivasi payment gateway Xendit dan Midtrans
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">1 User (pengguna)</p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={closeIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Autocancel pesanan belum lunas
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={closeIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Belum Gratis Domain Sendiri</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center mt-[20px]">
                <h3 className="font-bold text-[#666666]">99.000 / bulan</h3>
                <p className="text-[12px]">atau</p>
                <p className="text-[12px]">
                  <span className="text-[#666666] font-bold">990.000</span> per
                  tahun
                  <span className="text-red-400"> (hemat 2 bulan)</span>
                </p>

                <button className="bg-[#666666] text-center py-[0.5rem] px-12 rounded-md mt-[15px] text-white font-bold text-[14px]">
                  Berlangganan Starter
                </button>
              </div>
            </div>

            {/* Fitur Detail */}
            <div
              className={`bg-[#F1F1F1] sm:w-[320px] rounded-md px-[2rem] py-[1.5rem] w-full transition-all ${
                starterDetail
                  ? "h-max visible opacity-100 block"
                  : "h-[0] invisible opacity-0 hidden"
              } `}
            >
              <ul className="flex flex-col gap-4 text-[12px]">
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Biaya Perbulan</span>
                  <span className="text-center w-[7rem]">Rp.199.000</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Produk</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Pelanggan</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Pesanan</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Manajemen Katalog dengan muti variasi
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Gambar produk tak terbatas</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Manajemen stok produk</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Manajemen pelanggan dan grup pelanggan
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Atur diskon per grup pelanggan
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Multi ekspedisi</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    JNE, TIKI, J&T, SICEPAT, RPX, POS, LION PARCEL, INDAH CARGO,
                    NINJA EXPRESS, WAHANA
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Cetak nota dan alamat pengiriman
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Notifikasi pesanan via Whatsapp
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Payment gateway pembayaran otomatis
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="w-[7rem] ">
                    Resi pengiriman otomatis dan layanan Pickup by Shipper
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Katalog dan Pesanan Pre-order
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={closeIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Aktivasi payment gateway Xendit dan Midtrans
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Autocancel pesanan belum lunas
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={closeIcn} alt="" className="w-[20px] h-[20px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Gratis Domain Sendiri</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={closeIcn} alt="" className="w-[20px] h-[20px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Laporan</span>
                  <span className="text-center w-[7rem]">
                    Laporan Standar Penjualan, Pembayaran, Stok Export ke PDF
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Aplikasi Android Toko Online di Google Play Store
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={closeIcn} alt="" className="w-[20px] h-[20px]" />
                  </span>
                </li>
              </ul>
            </div>
            <Button
              bg="secondary"
              color="white"
              onClick={() => setStarterDetail(!starterDetail)}
            >
              {starterDetail ? "Lihat lebih sedikit" : "Lihat Fitur Starter"}
            </Button>

            {/* Card Pricing */}
            <div className="relative bg-white shadow-lg rounded-md px-[2rem] pb-[1.5rem] sm:w-[320px] w-full  lg:h-[540px]">
              <div className="mx-auto translate-y-[-15px] w-max px-5 rounded-md py-1 top-[-1rem] bg-primary font-bold text-white text-[12px]">
                Rekomendasi
              </div>
              <h2 className="text-center mt-[0px] font-bold text-[#666666]">
                Bisnis
              </h2>

              <div className="mt-[10px]">
                <ul>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Semua fitur pada paket{" "}
                      <span className="font-bold text-[#666666]">Starter</span>
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Autocancel pesanan belum lunas
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Manajemen user hingga 5 pengguna
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Laporan lengkap, mulai penjualan hingga stok barang
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      *Gratis nama domain sendiri, misalkan :{" "}
                      <span className="font-bold text-[#666666]">
                        tokokamu.com
                      </span>
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={closeIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Aplikasi Android Playstore</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center mt-[20px]">
                <p className="text-[12px] mb-[15px] ">
                  *Domain gratis berlaku untuk pembelian paket berlangganan
                  selama 12 bulan, tersedia dalam ekstensi .com dan .id
                </p>
                <h3 className="font-bold text-primary">229.000 / bulan</h3>
                <p className="text-[12px]">atau</p>
                <p className="text-[12px]">
                  2.290.000 per tahun
                  <span className="text-red-400"> (hemat 2 bulan)</span>
                </p>

                <button className="bg-primary_dark text-center py-[0.5rem] px-12 rounded-md mt-[15px] text-white font-bold text-[14px]">
                  Berlangganan Bisnis
                </button>
              </div>
            </div>

            {/* Fitur Detail */}
            <div
              className={`bg-[#F1F1F1] sm:w-[320px] rounded-md px-[2rem] py-[1.5rem] w-full transition-all ${
                bisnisDetail
                  ? "h-max visible opacity-100 block"
                  : "h-[0] invisible opacity-0 hidden"
              } `}
            >
              <ul className="flex flex-col gap-4 text-[12px]">
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Biaya Perbulan</span>
                  <span className="text-center w-[7rem]">Rp229.000</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Produk</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Pelanggan</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Pesanan</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Manajemen Katalog dengan muti variasi
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Gambar produk tak terbatas</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Manajemen stok produk</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Manajemen pelanggan dan grup pelanggan
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Atur diskon per grup pelanggan
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Multi ekspedisi</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    JNE, TIKI, J&T, SICEPAT, RPX, POS, LION PARCEL, INDAH CARGO,
                    NINJA EXPRESS, WAHANA GRAB-SEND, GOSEND
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Cetak nota dan alamat pengiriman
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Notifikasi pesanan via Whatsapp
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Payment gateway pembayaran otomatis
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="w-[7rem] ">
                    Resi pengiriman otomatis dan layanan Pickup by Shipper
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Katalog dan Pesanan Pre-order
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Aktivasi payment gateway Xendit dan Midtrans
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Autocancel pesanan belum lunas
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Gratis Domain Sendiri</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Laporan</span>
                  <span className="text-center w-[7rem]">
                    Laporan Standar Penjualan, Pembayaran, Stok Export ke PDF
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Aplikasi Android Toko Online di Google Play Store
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={closeIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
              </ul>
            </div>
            <Button
              bg="secondary"
              color="white"
              onClick={() => setBisnisDetail(!bisnisDetail)}
            >
              {bisnisDetail ? "Lihat lebih sedikit" : "Lihat Fitur Bisnis"}
            </Button>

            <div className="relative bg-[#EEC04F] rounded-md px-[2rem] pb-[1.5rem] sm:w-[320px] w-full h-max">
              <div className="mx-auto translate-y-[-15px] w-max px-5 rounded-md py-1 top-[-1rem] bg-[#F5F5F5] font-bold text-[#EEC04F] text-[12px]">
                Toko Besar
              </div>
              <h2 className="text-center mt-[0px] font-bold text-white">
                Enterprise
              </h2>

              <div className="mt-[10px] text-white">
                <ul>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Semua fitur pada paket Bisnis</p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      Manajemen user hingga 20 pengguna atau lebih (request)
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">
                      *Gratis nama domain sendiri, misalkan : tokokamu.com
                    </p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Aplikasi Android Play Store</p>
                  </li>
                  <li className="flex items-center gap-[10px] font-regular mb-[8px]">
                    <img src={correctIcn} alt="" className="w-[20px]" />
                    <p className="text-[14px]">Integrasi API</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center mt-[20px]">
                <p className="text-[12px] text-white">
                  *Domain gratis berlaku untuk pembelian paket berlangganan
                  selama 12 bulan, tersedia dalam ekstensi .com dan .id
                </p>
                <h2 className="font-bold text-[18px] text-white mt-[12px]">
                  {" "}
                  Hubungi kami
                </h2>
                <button className="bg-transparent border border-white text-center py-[0.5rem] px-12 rounded-md mt-[15px] text-white font-bold text-[14px]">
                  Berlangganan Bisnis
                </button>
              </div>
            </div>
            {/* Fitur Detail */}
            <div
              className={`bg-[#F1F1F1] sm:w-[320px] rounded-md px-[2rem] py-[1.5rem] w-full transition-all ${
                enterpriseDetail
                  ? "h-max visible opacity-100 block"
                  : "h-[0] invisible opacity-0 hidden"
              } `}
            >
              <ul className="flex flex-col gap-4 text-[12px]">
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Biaya Perbulan</span>
                  <span className="text-center w-[7rem]">Rp229.000</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Produk</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Pelanggan</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Jumlah Pesanan</span>
                  <span className="text-center w-[7rem]">Tak terbatas</span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Manajemen Katalog dengan muti variasi
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Gambar produk tak terbatas</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Manajemen stok produk</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Manajemen pelanggan dan grup pelanggan
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Atur diskon per grup pelanggan
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Multi ekspedisi</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    JNE, TIKI, J&T, SICEPAT, RPX, POS, LION PARCEL, INDAH CARGO,
                    NINJA EXPRESS, WAHANA GRAB-SEND, GOSEND
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Cetak nota dan alamat pengiriman
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Notifikasi pesanan via Whatsapp
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Payment gateway pembayaran otomatis
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="w-[7rem] ">
                    Resi pengiriman otomatis dan layanan Pickup by Shipper
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Katalog dan Pesanan Pre-order
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Aktivasi payment gateway Xendit dan Midtrans
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Autocancel pesanan belum lunas
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Gratis Domain Sendiri</span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">Laporan</span>
                  <span className="text-center w-[7rem]">
                    Laporan Standar Penjualan, Pembayaran, Stok Export ke PDF
                  </span>
                </li>
                <li className="flex justify-between items-center ">
                  <span className="w-[7rem]">
                    Aplikasi Android Toko Online di Google Play Store
                  </span>
                  <span className="text-center w-[7rem] flex justify-center">
                    <img src={correctIcn} alt="" className="w-[19px]" />
                  </span>
                </li>
              </ul>
            </div>
            <Button
              bg="secondary"
              color="white"
              onClick={() => setEnterpriseDetail(!enterpriseDetail)}
            >
              {enterpriseDetail
                ? "Lihat lebih sedikit"
                : "Lihat Fitur Enterprise"}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Harga;
