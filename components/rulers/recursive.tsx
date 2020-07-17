import React from "react";
import { RightTriangle, LeftTriangle } from "~/components/triangles/index";

export default function Recusive({
  depth,
  unit,
  step,
  maxdepth = depth + step,
  reverse = false,
}: {
  depth: number;
  maxdepth?: number;
  reverse?: boolean;
  unit: "in" | "cm";
  step: number;
}) {
  if (depth - step < 0) {
    return null;
  }
  return (
    <div>
      <>
        {reverse ? null : <LeftTriangle />}
        {maxdepth - depth}
        {unit}
        {reverse ? <RightTriangle /> : null}
      </>
      <Recusive
        depth={depth - step}
        unit={unit}
        maxdepth={maxdepth}
        reverse={reverse}
        step={step}
      />
    </div>
  );
}
