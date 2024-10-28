import React from "react";

interface Props {
  style?: string;
}

const InputOutputDot: React.FC<Props> = ({ style }) => {
  return (
    <div
      className={`w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center ${style}`}
    >
      <div className="w-2 h-2 border-2 border-blue-400 bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default InputOutputDot;
