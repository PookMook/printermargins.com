import React, { useState } from "react";
import styles from "./styles.module.css";
import Right from "~/components/rulers/right";
import Left from "~/components/rulers/left";

export default function Main() {
  const [step, setStep] = useState<number>(0.0625);
  const [dimensions, setDimensions] = useState<string[]>(["11in", "8,5in"]);
  const [unit, setUnit] = useState<"in" | "cm">("in");

  return (
    <main className={styles.main}>
      <Right unit={unit} step={step} />
      <Left unit={unit} step={step} />
      <Style
        step={step}
        unit={unit}
        width={dimensions[0]}
        height={dimensions[1]}
      />
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
  }
  @page {
      size:${width} ${height};
  }`}
    </style>
  );
};
