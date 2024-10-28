import React, { MutableRefObject } from "react";
import Function from "./Function";

interface FunctionSectionProps {
  inputValue: number;
  setFunction1Output: (output: number) => void;
  setFunction2Output: (output: number) => void;
  setFunction3Output: (output: number | string) => void;
  setFunction4Output: (output: number) => void;
  setFunction5Output: (output: number) => void;
  function1Output: number | null;
  function2Output: number | null;
  function4Output: number | null;
  function5Output: number | null;
  equationError: string;
  setEquationError: (error: string) => void;
  function1Ref: MutableRefObject<HTMLDivElement | null>;
  function2Ref: MutableRefObject<HTMLDivElement | null>;
  function3Ref: MutableRefObject<HTMLDivElement | null>;
  function4Ref: MutableRefObject<HTMLDivElement | null>;
  function5Ref: MutableRefObject<HTMLDivElement | null>;
}

const FunctionSection: React.FC<FunctionSectionProps> = ({
  inputValue,
  function1Output,
  function2Output,
  function4Output,
  function5Output,
  setFunction1Output,
  setFunction2Output,
  setFunction3Output,
  setFunction4Output,
  setFunction5Output,
  equationError,
  setEquationError,
  function1Ref,
  function2Ref,
  function3Ref,
  function4Ref,
  function5Ref,
}) => {
  return (
    <div className="col-span-8 flex flex-wrap justify-center gap-[72px]">
      <div ref={function1Ref}>
        <Function
          functionNumber={1}
          inititalInputValue="x^2"
          inputValue={inputValue}
          setOutput={setFunction1Output}
          nextFunction="function_2"
          equationError={equationError}
          setEquationError={setEquationError}
        />
      </div>
      <div ref={function2Ref}>
        <Function
          functionNumber={2}
          inititalInputValue="2*x+4"
          inputValue={function1Output}
          setOutput={setFunction2Output}
          nextFunction="function_4"
        />
      </div>
      <div ref={function3Ref}>
        <Function
          functionNumber={3}
          inititalInputValue="x^2+20"
          inputValue={function5Output}
          setOutput={setFunction3Output}
          nextFunction="function_5"
        />
      </div>
      <div ref={function4Ref}>
        <Function
          functionNumber={4}
          inititalInputValue="x-2"
          inputValue={function2Output}
          setOutput={setFunction4Output}
          nextFunction="function_5"
        />
      </div>
      <div ref={function5Ref}>
        <Function
          functionNumber={5}
          inititalInputValue="x/2"
          inputValue={function4Output}
          setOutput={setFunction5Output}
          nextFunction="function_3"
        />
      </div>
    </div>
  );
};

export default FunctionSection;
