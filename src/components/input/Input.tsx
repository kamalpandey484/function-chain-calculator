import { forwardRef } from "react";
import InputOutputDot from "../common/InputOutputDot";

interface Props {
  inputValue: number;
  setInputValue: (value: number) => void;
}

const Input = forwardRef<HTMLDivElement, Props>(
  ({ inputValue, setInputValue }, ref) => {
    return (
      <div>
        <div className="bg-[#E29A2D] mb-2 rounded-full px-2 text-xs text-white leading-relaxed font-semibold text-center">
          Initial value of x
        </div>
        <div className="h-12 bg-white border-[#FFC267] border-2 rounded-xl flex items-center">
          <div className="border-r-2 border-r-[#FFEED5]">
            <input
              className="w-16 h-[44px] p-3 text-lg font-bold text-left rounded-l-xl focus:outline-none"
              type="number"
              value={inputValue}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                setInputValue(isNaN(value) ? 0 : value);
              }}
            />
          </div>
          <div ref={ref}>
            <InputOutputDot style={"ml-4"} />
          </div>
        </div>
      </div>
    );
  }
);

export default Input;
