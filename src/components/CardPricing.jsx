import React from "react";
import { Link } from "react-router-dom";
// Icon
import correctIcn from "../assets/images/icon/correct.png";
import closeIcn from "../assets/images/icon/reject.png";

const CardPricing = ({ items }) => {
  return (
    // <div className="grid lg:grid-cols-3 grid-cols-1">
    //   {items.map((item, index) => {
    //     return (
    //       <div
    //         className={`relative  ${item.shadow ? "shadow-md" : ""}`}
    //         key={index}
    //         style={{ backgroundColor: item.color }}
    //       >
    //         <div
    //           className="absolute left-[40%] px-3 rounded-md py-1 top-[-1rem]"
    //           style={{ backgroundColor: item.bgTag, color: item.color }}
    //         >
    //           {item.for}
    //         </div>
    //         {item.title}
    //         <h1>Hello World</h1>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="flex lg:flex-row flex-col lg:gap-0 sm:gap-15 gap-10 justify-center items-center flex-wrap">
      <div className="relative bg-[#F1F1F1] rounded-md px-[2rem] pb-[1.5rem] w-[320px] h-max">
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
              <p className="text-[14px]">Laporan </p>
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
              <p className="text-[14px]">Autocancel pesanan belum lunas</p>
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
            <span className="text-[#666666] font-bold">990.000</span> per tahun
            <span className="text-red-400"> (hemat 2 bulan)</span>
          </p>

          <a
            href="http://wa.me/6285157220258"
            className="bg-[#666666] text-center py-[0.5rem] px-12 rounded-md mt-[15px] text-white font-bold text-[14px]"
          >
            Berlangganan Starter
          </a>
        </div>
      </div>
      <div className="relative bg-white shadow-lg rounded-md px-[2rem] pb-[1.5rem] w-[320px]   lg:h-[540px]">
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
              <p className="text-[14px]">Autocancel pesanan belum lunas</p>
            </li>
            <li className="flex items-center gap-[10px] font-regular mb-[8px]">
              <img src={correctIcn} alt="" className="w-[20px]" />
              <p className="text-[14px]">Manajemen user hingga 5 pengguna</p>
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
                <span className="font-bold text-[#666666]">tokokamu.com</span>
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
            *Domain gratis berlaku untuk pembelian paket berlangganan selama 12
            bulan, tersedia dalam ekstensi .com dan .id
          </p>
          <h3 className="font-bold text-primary">229.000 / bulan</h3>
          <p className="text-[12px]">atau</p>
          <p className="text-[12px]">
            2.290.000 per tahun
            <span className="text-red-400"> (hemat 2 bulan)</span>
          </p>

          <a
            href="http://wa.me/6285157220258"
            className="bg-primary_dark text-center py-[0.5rem] px-12 rounded-md mt-[15px] text-white font-bold text-[14px]"
          >
            Berlangganan Bisnis
          </a>
        </div>
      </div>
      <div className="relative bg-[#EEC04F] rounded-md px-[2rem] pb-[1.5rem] w-[320px] h-[30rem]">
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

        <div className="flex flex-col items-center mt-[105px]">
          <h3 className="font-bold text-white">699.000 / bulan</h3>
          <p className="text-[12px]">atau</p>
          <p className="text-[12px]">
            6.990.000 per tahun
            <span className="text-red-600"> (hemat 2 bulan)</span>
          </p>

          <a
            href="http://wa.me/6285157220258"
            className="bg-transparent border border-white text-center py-[0.5rem] px-12 rounded-md mt-[15px] text-white font-bold text-[14px] whitespace-nowrap"
          >
            Berlangganan Enterprise
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPricing;
