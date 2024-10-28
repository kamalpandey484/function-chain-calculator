import React, { useEffect, useState } from "react";
import Dots from "../common/Dots";
import InputOutputDot from "../common/InputOutputDot";

interface Props {
  functionNumber: number;
  inititalInputValue: string;
  inputValue: number | null;
  setOutput: (value: number) => void;
  nextFunction: string;
  equationError?: string;
  setEquationError?: (value: string) => void;
}

const Function: React.FC<Props> = ({
  functionNumber,
  inititalInputValue,
  inputValue,
  setOutput,
  nextFunction,
  setEquationError,
}) => {
  const [equation, setEquation] = useState<string>(inititalInputValue);

  useEffect(() => {
    if (inputValue !== null) {
      const result = evaluateEquation(equation, inputValue);
      setOutput(result);
    }
  }, [inputValue, equation, setOutput]);

  const evaluateEquation = (eq: string, xValue: number): number => {
    try {
      let parsedEquation = eq
        .replace(/x/g, xValue.toString())
        .replace(/\^/g, "**");
      parsedEquation = parsedEquation.replace(/(-?\d+)\s*\*\*/g, "($1)**");
      const result = eval(parsedEquation);
      return result;
    } catch (error) {
      console.error("Error evaluating equation:", error);
      return 0;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9x+\-*/^]*$/;

    // Check if input matches the regex
    if (regex.test(value)) {
      setEquation(value); // Update input if valid
      if (setEquationError) {
        setEquationError(""); // Clear error message if defined
      }
    } else {
      if (setEquationError) {
        setEquationError("Only 0-9, x, +, -, *, /, and ^ are allowed.");
      }
    }
  };

  return (
    <div className="p-4 w-[235px] bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <div className="flex items-center">
          <Dots dots={6} />
          <h3 className="text-sm font-semibold leading-4 text-left text-gray-500">
            Function: {functionNumber}
          </h3>
        </div>
        <div className="mt-4">
          <label className="text-xs font-medium leading-3 text-left text-gray-900">
            Equation
          </label>
          <input
            type="text"
            name="equation"
            id="equation"
            className="h-[33px] bg-gray-50 border border-gray-300 text-gray-900 text-[12px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
            placeholder="Enter equation"
            value={equation}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-3">
          <label className="text-xs font-medium leading-3 text-left text-gray-900">
            Next function
          </label>
          <select
            id="countries"
            className="h-[33px] bg-gray-50 border border-gray-300 text-gray-400 font-medium text-sm rounded-lg flex w-full p-1"
            value={nextFunction}
            disabled={true}
          >
            <option value="function_1">Function 1</option>
            <option value="function_2">Function 2</option>
            <option value="function_3">Function 3</option>
            <option value="function_4">Function 4</option>
            <option value="function_5">Function 5</option>
            <option value="function_last">---</option>
          </select>
        </div>
      </div>
      <div className="mt-10 flex justify-between">
        <div className="flex items-center">
          <InputOutputDot />
          <div className="pl-1 text-[10px]">input</div>
        </div>

        <div className="flex items-center">
          <div className="pr-1 text-[10px]">output</div>
          <InputOutputDot />
        </div>
      </div>
    </div>
  );
};

export default Function;
