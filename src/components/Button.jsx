import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, bg, color, children, style = "", onClick }) => {
  return (
    <Link
      to={path}
      className={`bg-${bg} text-${color} font-bold  py-[0.5rem] text-[0.8rem] px-6 rounded-[0.2rem] text-center w-max`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
