import React from "react";

interface Props {
  dots: number;
}

const Dots: React.FC<Props> = ({ dots }) => {
  return (
    <div className="grid grid-cols-3 gap-0.5 mr-2">
      {Array.from({ length: dots }).map((_, index) => (
        <div
          key={index}
          className="w-[3px] h-[3px] font-bold bg-gray-300 rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default Dots;
