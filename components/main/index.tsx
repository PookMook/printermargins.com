import React, { useState } from "react";
import styles from "./styles.module.css";
import Right from "~/components/rulers/right";
import Left from "~/components/rulers/left";
import Pickers from "~/components/pickers";

export default function Main() {
  const [step, setStep] = useState<number>(0.0625);
  const [dimensions, setDimensions] = useState<string[]>(["11in", "8,5in"]);
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [max, setMax] = useState<number>(2);

  const actions = { setStep, setDimensions, setUnit, setMax };
  const settings = { step, dimensions, unit, max };

  return (
    <main className={styles.main}>
      <Right {...settings} />
      <Left {...settings} />
      <Style
        step={step}
        unit={unit}
        width={dimensions[0]}
        height={dimensions[1]}
      />
      <Pickers {...settings} {...actions} />
    </main>
  );
}

const Style = ({
  step,
  unit,
  width,
  height,
}: {
  step: number;
  unit: "cm" | "in";
  width: string;
  height: string;
}) => {
  return (
    <style>
      {`
  :root {
      --step:${step}${unit};
      --width:${width};
      --height:${height};
  }
  @page {
      size:${width} ${height};
  }`}
    </style>
  );
};
