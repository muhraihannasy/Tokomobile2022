import React from "react";
import correctIcn from "../assets/images/icon/correct.png";
import rejectIcn from "../assets/images/icon/reject.png";

const ListDescription = ({ items, sizeText = "14px", icon = "correct" }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            className={`text-${sizeText} flex items-center gap-2 mb-[1rem]`}
            key={index}
          >
            <img
              src={icon === "correct" ? correctIcn : rejectIcn}
              alt=""
              className="w-[24px]"
            />
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ListDescription;
