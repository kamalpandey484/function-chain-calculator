import { forwardRef } from "react";
import InputOutputDot from "../common/InputOutputDot";

interface Props {
  value: number | string;
}

const Output = forwardRef<HTMLDivElement, Props>(({ value }, ref) => {
  return (
    <div>
      <div className="bg-[#4CAF79] mb-2 rounded-full px-2 text-xs text-white leading-relaxed font-semibold text-center">
        final output y
      </div>
      <div className=" bg-white border-[#2DD179] border-2 rounded-xl flex items-center">
        <div ref={ref} className="ml-3">
          <InputOutputDot style={"mr-4"} />
        </div>
        <div className="border-l-2 border-l-[#C5F2DA]">
          <input
            value={value}
            readOnly
            className="w-16 p-3 rounded-r-xl text-lg font-bold leading-5 text-center focus:outline-none"
            type="text"
          />
        </div>
      </div>
    </div>
  );
});

export default Output;
