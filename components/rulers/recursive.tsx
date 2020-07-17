import React from "react";
import { RightTriangle, LeftTriangle } from "~/components/triangles/index";

export default function Recusive({
  depth,
  unit,
  maxdepth = depth + 1,
  reverse = false,
}: {
  depth: number;
  maxdepth?: number;
  reverse?: boolean;
  unit: "in" | "cm";
}) {
  if (depth < 1) {
    return null;
  }
  return (
    <div>
      <>
        {reverse ? null : <LeftTriangle />}
        {(maxdepth - depth) / 10}
        {unit}
        {reverse ? <RightTriangle /> : null}
      </>
      <Recusive
        depth={depth - 1}
        unit={unit}
        maxdepth={maxdepth}
        reverse={reverse}
      />
    </div>
  );
}
