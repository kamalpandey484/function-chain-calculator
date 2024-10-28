import React from "react";

interface PathProps {
  startX: number; // Starting x coordinate
  startY: number; // Starting y coordinate
  endX: number; // Ending x coordinate
  endY: number; // Ending y coordinate
  color?: string; // Color of the path
  strokeWidth?: number; // Width of the stroke
  isCurved?: boolean; // Flag to determine if the path should be curved
  controlX1?: number; // First control point x
  controlY1?: number; // First control point y
  controlX2?: number; // Second control point x (optional)
  controlY2?: number; // Second control point y (optional)
}

const Path: React.FC<PathProps> = ({
  startX,
  startY,
  endX,
  endY,
  color = "gray",
  strokeWidth = 2,
  isCurved = false,
  controlX1,
  controlY1,
  controlX2,
  controlY2,
}) => {
  // Create the path data based on whether it's a curve or straight line
  const pathData = isCurved
    ? `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`
    : `M ${startX} ${startY} L ${endX} ${endY}`;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <path
        d={pathData}
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeOpacity={0.3}
      />
    </svg>
  );
};

export default Path;
