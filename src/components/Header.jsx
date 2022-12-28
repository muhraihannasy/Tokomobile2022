import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";

// Logo
import logo from "../assets/images/logo.png";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <header className="bg-primary lg:py-0 py-3 font-bold text-white text-[14px] px-6">
      <div className="flex items-center justify-between max-w-6xl  mx-auto">
        <div className="flex items-center">
          <div>
            <BsList
              className="text-[2rem]  lg:hidden cursor-pointer"
              onClick={() => setActiveNav(true)}
            />
          </div>
          <Link href="" className="logo lg:w-[207px] block w-[8rem]">
            <img src={logo} alt="sad" className="w-full" />
          </Link>
        </div>

        <nav>
          <ul
            className={`flex items-center lg:justify-center z-[99] lg:gap-3 gap-2 py-[6rem] lg:py-[0] fixed left-0 top-0 lg:relative lg:flex-row flex-col lg:bg-transparent bg-green2 lg:text-white text-tx_dark lg:font-bold font-medium lg:w-max w-full h-full transition-all lg:text-[14px] text-[1rem] lg:opacity-100 lg:visible ${
              activeNav ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="lg:hidden flex items-center w-full px-6 justify-between absolute left-0 top-[1.5rem]">
              <VscClose
                className=" text-tx_red text-[2.5rem]  cursor-pointer"
                onClick={() => setActiveNav(false)}
              />
              <img src={logo} alt="" className="w-[8rem]" />
            </div>
            <li
              className="p-2 rounded-lg  transition-colors lg:hover:bg-primary_dark lg:hover:text-white hover:text-primary_dark"
              onClick={() => setActiveNav(false)}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-2 rounded-lg  transition-colors lg:hover:bg-primary_dark lg:hover:text-white  hover:text-primary_dark"
              onClick={() => setActiveNav(false)}
            >
              <Link to="/fitur">Fitur</Link>
            </li>
            <li
              className="p-2 rounded-lg  transition-colors lg:hover:bg-primary_dark lg:hover:text-white  hover:text-primary_dark"
              onClick={() => setActiveNav(false)}
            >
              <Link to="/harga">Harga</Link>
            </li>
            <li
              className="p-2 rounded-lg  transition-colors lg:hover:bg-primary_dark lg:hover:text-white  hover:text-primary_dark"
              onClick={() => setActiveNav(false)}
            >
              <Link to="/tentang_kami">Tentang Kami</Link>
            </li>
          </ul>
        </nav>

        <a
          href="https://dashboard.tokomobile.com/login"
          className="bg-secondary py-[0.3rem] text-[0.8rem] px-6 rounded-[0.2rem]"
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
