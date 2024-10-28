export interface PathCoordinates {
  inputToFunction1?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  function1ToFunction2?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  function2ToFunction4?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  function4ToFunction5?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  function5ToFunction3?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
  function3ToOutput?: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  };
}
