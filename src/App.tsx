import { useEffect, useRef, useState } from "react";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import Toast from "./components/common/Toast";
import FunctionSection from "./components/function/FunctionSection";
import PathRenderer from "./components/path/PathRenderer";
import { PathCoordinates } from "./types/interface";
import { calculatePathCoordinates } from "./utils/pathUtils";

const App = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [function1Output, setFunction1Output] = useState<number | null>(0);
  const [function2Output, setFunction2Output] = useState<number | null>(0);
  const [function4Output, setFunction4Output] = useState<number | null>(0);
  const [function5Output, setFunction5Output] = useState<number | null>(0);
  const [function3Output, setFunction3Output] = useState<number | string>(0);
  const [equationError, setEquationError] = useState<string>("");

  const inputRef = useRef<HTMLDivElement | null>(null);
  const function1Ref = useRef<HTMLDivElement | null>(null);
  const function2Ref = useRef<HTMLDivElement | null>(null);
  const function3Ref = useRef<HTMLDivElement | null>(null);
  const function4Ref = useRef<HTMLDivElement | null>(null);
  const function5Ref = useRef<HTMLDivElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

  const [pathCoordinates, setPathCoordinates] = useState<PathCoordinates>({
    inputToFunction1: undefined,
    function1ToFunction2: undefined,
    function2ToFunction4: undefined,
    function4ToFunction5: undefined,
    function5ToFunction3: undefined,
    function3ToOutput: undefined,
  });

  useEffect(() => {
    calculatePathCoordinates(
      {
        inputRef,
        function1Ref,
        function2Ref,
        function3Ref,
        function4Ref,
        function5Ref,
        outputRef,
      },
      setPathCoordinates
    );

    const handleResize = () => {
      calculatePathCoordinates(
        {
          inputRef,
          function1Ref,
          function2Ref,
          function3Ref,
          function4Ref,
          function5Ref,
          outputRef,
        },
        setPathCoordinates
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToastRemove = () => {
    setEquationError("");
  };

  useEffect(() => {
    if (equationError) {
      const timer = setTimeout(() => {
        handleToastRemove();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [equationError]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {equationError && (
        <Toast message={equationError} onClose={handleToastRemove} />
      )}
      <div className="grid grid-cols-12 gap-2 w-full max-w-7xl">
        <div className="col-span-2 flex flex-col items-end mt-[171px]">
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            ref={inputRef}
          />
        </div>
        <FunctionSection
          inputValue={inputValue}
          function1Output={function1Output}
          function2Output={function2Output}
          function4Output={function4Output}
          function5Output={function5Output}
          setFunction1Output={setFunction1Output}
          setFunction2Output={setFunction2Output}
          setFunction3Output={setFunction3Output}
          setFunction4Output={setFunction4Output}
          setFunction5Output={setFunction5Output}
          equationError={equationError}
          setEquationError={setEquationError}
          function1Ref={function1Ref}
          function2Ref={function2Ref}
          function3Ref={function3Ref}
          function4Ref={function4Ref}
          function5Ref={function5Ref}
        />

        <div className="col-span-2 flex flex-col items-start mt-[171px]">
          <Output value={function3Output} ref={outputRef} />
        </div>
      </div>
      <PathRenderer pathCoordinates={pathCoordinates} />
    </div>
  );
};

export default App;
