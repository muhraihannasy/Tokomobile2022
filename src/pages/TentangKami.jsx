import React from "react";

// Images

import bg from "../assets/images/bg-tentangkami.png";
import defaultProfile from "../assets/images/default.png";
import instagram from "../assets/images/icon/instagram.png";
import facebook from "../assets/images/icon/facebook.png";

// Components
import Button from "../components/Button";
import FloatWa from "../components/FloatWa";

const TentangKami = () => {
  return (
    <main>
      {/* Floating Whatsapp */}
      <FloatWa />

      <section
        className="lg:h-[563px] flex items-center justify-center relative before:absolute before:left-0 before:top-0 before:bg-black before:opacity-[56%] z-[9]  before:z-[-1] before:w-full before:lg:h-[563px] before:h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-10 text-white text-center ">
          <h2 className="font-medium text-[24px]">Tentang Kami</h2>
          <p className="text-[14px] md:w-[465px] mx-auto">
            Tokomobile adalah website dan aplikasi online shop atau toko online
            siap pakai. Tokomobile menjadi pelopor mobile e-commerce sejak tahun
            2012, saat ini kami telah membantu lebih dari 1.000 online seller di
            Indonesia yang dalam mengembangkan bisnis online melalui platform
            Toko online e-commerce.
          </p>
        </div>
      </section>

      <section>
        <div className="container mt-[2rem] text-center">
          <h2 className="font-medium text-[18px] text-primary mb-[0.8rem]">
            Misi Kami
          </h2>
          <p className="text-[14px] md:w-[631px] mx-auto">
            Mempermudah kalangan masyarakat yang memiliki usaha dan kegiatan
            yang banyak sehingga memudahkan mereka dalam mengelola usaha secara
            online, Toko Mobile siap mewujudkan impian Anda untuk membuat
            website profesional dengan beberapa klik saja.
          </p>
        </div>
      </section>

      <section class="bg-[#F5F5F5] mb-[6rem]">
        <div className="container py-10 mt-[3rem] text-center">
          <h2 className="font-medium text-[18px] text-primary mb-[0.8rem]">
            Owner
          </h2>

          <div className="flex lg:flex-row flex-col flex-wrap  items-center justify-center gap-10">
            <div>
              <div className="w-[200px] rounded-full overflow-hidden">
                <img src={defaultProfile} alt="" className="object-cover" />
              </div>
            </div>

            <div className="mt-[1rem] flex flex-col lg:items-start items-center  ">
              <h2 className="font-medium text-[18px] text-primary mb-[0.8rem]">
                Novatama Solusi Teknologi
              </h2>
              <p className="text-[14px] mb-[1.5rem] md:w-[416px] lg:text-left">
                Novatama adalah perusahaan layanan teknologi dan informasi yang
                berfokus pada layanan web dan pengembangan aplikasi, layanan
                cloud, implementasi ERP, dan layanan berbasis digital lainnya.
              </p>
              <Button path="" bg="secondary" color="white">
                Lebih Tahu Tentang Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container mt-[2rem] text-center">
          <h2 className="font-medium text-[18px] text-primary mb-[0.8rem]">
            Tim
          </h2>
          <p className="text-[14px]">
            Tim profesional kami membuat pengalaman terbaik untuk hidup Anda
          </p>

          <div className="flex items-center pb-8 md:justify-center mt-[2rem] text-left gap-6 lg:overflow-x-auto overflow-x-scroll">
            <div className="w-[228px]">
              <div className="w-[228px] border-x-[0.7rem] border-t-[0.7rem] border-red-400 relative">
                <img src={defaultProfile} alt="" className="object-cover" />

                <div className="bg-red-400 text-white text-center w-max px-4 py-2 absolute bottom-[1.5rem]">
                  <span>Manager</span>
                </div>
              </div>
              <h2 className="mt-[1rem] mb-[0.6rem] font-bold">Novan Bagus</h2>
              <p className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>

              <div className="flex items-center gap-4 mt-[1.5rem]">
                <img src={facebook} alt="" className="w-[1.5rem]" />
                <img src={instagram} alt="" className="w-[1.4rem]" />
              </div>
            </div>
            <div className="w-[228px]">
              <div className="w-[228px] border-x-[0.7rem] border-t-[0.7rem] border-secondary relative">
                <img src={defaultProfile} alt="" className="object-cover" />

                <div className="bg-secondary text-white text-center w-max px-4 py-2 absolute bottom-[1.5rem]">
                  <span>Designer</span>
                </div>
              </div>
              <h2 className="mt-[1rem] mb-[0.6rem] font-bold">
                Ichwan Setyawan
              </h2>
              <p className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>

              <div className="flex items-center gap-4 mt-[1.5rem]">
                <img src={facebook} alt="" className="w-[1.5rem]" />
                <img src={instagram} alt="" className="w-[1.4rem]" />
              </div>
            </div>
            <div className="w-[228px]">
              <div className="w-[228px] border-x-[0.7rem] border-t-[0.7rem] border-red-400 relative">
                <img src={defaultProfile} alt="" className="object-cover" />

                <div className="bg-red-400 text-white text-center w-max px-4 py-2 absolute bottom-[1.5rem]">
                  <span>Progammer</span>
                </div>
              </div>
              <h2 className="mt-[1rem] mb-[0.6rem] font-bold">
                Muhammad Ma'dum
              </h2>
              <p className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>

              <div className="flex items-center gap-4 mt-[1.5rem]">
                <img src={facebook} alt="" className="w-[1.5rem]" />
                <img src={instagram} alt="" className="w-[1.4rem]" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default TentangKami;
