import { PathCoordinates } from "../types/interface";

export const calculatePathCoordinates = (
  refs: {
    inputRef: React.RefObject<HTMLElement>;
    function1Ref: React.RefObject<HTMLElement>;
    function2Ref: React.RefObject<HTMLElement>;
    function3Ref: React.RefObject<HTMLElement>;
    function4Ref: React.RefObject<HTMLElement>;
    function5Ref: React.RefObject<HTMLElement>;
    outputRef: React.RefObject<HTMLElement>;
  },
  setPathCoordinates: React.Dispatch<React.SetStateAction<PathCoordinates>>
) => {
  const {
    inputRef,
    function1Ref,
    function2Ref,
    function3Ref,
    function4Ref,
    function5Ref,
    outputRef,
  } = refs;

  const input = inputRef.current?.getBoundingClientRect();
  const function1 = function1Ref.current?.getBoundingClientRect();
  const function2 = function2Ref.current?.getBoundingClientRect();
  const function3 = function3Ref.current?.getBoundingClientRect();
  const function4 = function4Ref.current?.getBoundingClientRect();
  const function5 = function5Ref.current?.getBoundingClientRect();
  const output = outputRef.current?.getBoundingClientRect();

  const newCoordinates: PathCoordinates = {}; // Initialize with defined type

  if (input && function1) {
    newCoordinates.inputToFunction1 = {
      startX: input.right,
      startY: input.top + input.height / 2,
      endX: function1.left,
      endY: function1.top + function1.height / 2,
    };
  }

  if (function1 && function2) {
    newCoordinates.function1ToFunction2 = {
      startX: function1.right,
      startY: function1.top + function1.height / 2,
      endX: function2.left,
      endY: function2.top + function2.height / 2,
    };
  }

  if (function2 && function4) {
    newCoordinates.function2ToFunction4 = {
      startX: function2.right,
      startY: function2.top + function2.height / 2,
      endX: function4.left,
      endY: function4.top + function4.height / 2,
    };
  }

  if (function4 && function5) {
    newCoordinates.function4ToFunction5 = {
      startX: function4.right,
      startY: function4.top + function4.height / 2,
      endX: function5.left,
      endY: function5.top + function5.height / 2,
    };
  }

  if (function5 && function3) {
    newCoordinates.function5ToFunction3 = {
      startX: function5.right,
      startY: function5.top + function5.height / 2,
      endX: function3.left,
      endY: function3.top + function3.height / 2,
    };
  }

  if (function3 && output) {
    newCoordinates.function3ToOutput = {
      startX: function3.right,
      startY: function3.top + function3.height / 2,
      endX: output.left,
      endY: output.top + output.height / 2,
    };
  }

  setPathCoordinates((prev) => ({
    ...prev,
    ...newCoordinates,
  }));
};
