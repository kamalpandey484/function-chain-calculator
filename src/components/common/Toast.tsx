import React from "react";

const Toast: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed bottom-4 right-4 bg-white text-gray-500 p-4 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-red-600 hover:text-red-800 cursor-pointer"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Toast;
