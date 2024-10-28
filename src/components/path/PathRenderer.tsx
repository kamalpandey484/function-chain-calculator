import React from "react";
import Path from "./Path";
import { PathCoordinates } from "../../types/interface";

interface PathRendererProps {
  pathCoordinates: PathCoordinates;
}

const PathRenderer: React.FC<PathRendererProps> = ({ pathCoordinates }) => {
  return (
    <>
      {pathCoordinates.inputToFunction1 && (
        <Path
          startX={pathCoordinates.inputToFunction1.startX - 8}
          startY={pathCoordinates.inputToFunction1.startY}
          endX={pathCoordinates.inputToFunction1.endX + 25}
          endY={pathCoordinates.inputToFunction1.endY + 99}
          color="#0066FF"
          strokeWidth={7}
        />
      )}
      {pathCoordinates.function1ToFunction2 && (
        <Path
          startX={pathCoordinates.function1ToFunction2.startX - 25}
          startY={pathCoordinates.function1ToFunction2.startY + 99}
          endX={pathCoordinates.function1ToFunction2.endX + 25}
          endY={pathCoordinates.function1ToFunction2.endY + 99}
          color="#0066FF"
          strokeWidth={7}
          isCurved={true}
          controlX1={pathCoordinates.function1ToFunction2.startX}
          controlY1={pathCoordinates.function1ToFunction2.startY + 140}
          controlX2={pathCoordinates.function1ToFunction2.endX}
          controlY2={pathCoordinates.function1ToFunction2.endY + 140}
        />
      )}
      {pathCoordinates.function2ToFunction4 && (
        <Path
          startX={pathCoordinates.function2ToFunction4.startX - 25}
          startY={pathCoordinates.function2ToFunction4.startY + 99}
          endX={pathCoordinates.function2ToFunction4.endX + 25}
          endY={pathCoordinates.function2ToFunction4.endY + 99}
          color="#0066FF"
          strokeWidth={7}
          isCurved={true}
          controlX1={pathCoordinates.function2ToFunction4.startX - 50}
          controlY1={pathCoordinates.function2ToFunction4.startY + 200}
          controlX2={pathCoordinates.function2ToFunction4.endX + 45}
          controlY2={pathCoordinates.function2ToFunction4.endY - 30}
        />
      )}
      {pathCoordinates.function4ToFunction5 && (
        <Path
          startX={pathCoordinates.function4ToFunction5.startX - 25}
          startY={pathCoordinates.function4ToFunction5.startY + 99}
          endX={pathCoordinates.function4ToFunction5.endX + 25}
          endY={pathCoordinates.function4ToFunction5.endY + 99}
          color="#0066FF"
          strokeWidth={7}
          isCurved={true}
          controlX1={pathCoordinates.function4ToFunction5.startX}
          controlY1={pathCoordinates.function4ToFunction5.startY + 140}
          controlX2={pathCoordinates.function4ToFunction5.endX}
          controlY2={pathCoordinates.function4ToFunction5.endY + 140}
        />
      )}
      {pathCoordinates.function5ToFunction3 && (
        <Path
          startX={pathCoordinates.function5ToFunction3.startX - 25}
          startY={pathCoordinates.function5ToFunction3.startY + 99}
          endX={pathCoordinates.function5ToFunction3.endX + 25}
          endY={pathCoordinates.function5ToFunction3.endY + 99}
          color="#0066FF"
          strokeWidth={7}
          isCurved={true}
          controlX1={pathCoordinates.function5ToFunction3.startX + 25}
          controlY1={pathCoordinates.function5ToFunction3.startY + 50}
          controlX2={pathCoordinates.function5ToFunction3.endX + 100}
          controlY2={pathCoordinates.function5ToFunction3.endY + 125}
        />
      )}
      {pathCoordinates.function3ToOutput && (
        <Path
          startX={pathCoordinates.function3ToOutput.startX - 25}
          startY={pathCoordinates.function3ToOutput.startY + 99}
          endX={pathCoordinates.function3ToOutput.endX + 8}
          endY={pathCoordinates.function3ToOutput.endY}
          color="#0066FF"
          strokeWidth={7}
        />
      )}
    </>
  );
};

export default PathRenderer;
