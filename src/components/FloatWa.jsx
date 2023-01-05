import { Link } from "react-router-dom";

// Icon Whatsapp
import whatsapp from "../assets/images/icon/wa.png";

const FloatWa = () => {
  return (
    <a
      href="https://wa.me/6285157220258"
      className="fixed z-[99] w-[4rem] bottom-[3.5rem] right-[2.5rem] bg-green-500 rounded-full shadow-lg"
    >
      <img src={whatsapp} alt="" />
    </a>
  );
};

export default FloatWa;
