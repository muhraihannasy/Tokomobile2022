import React from "react";

const ImageGroup = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {items.map((img) => {
        return (
          <div className="md:w-[8rem] w-[6rem] flex items-center justify-center">
            <img src={img} alt="" className="object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGroup;
