import React from "react";
import styles from "./styles.module.css";
import Recursive from "./recursive";

export default function Left({
  unit,
  step,
  max,
}: {
  unit: "cm" | "in";
  step: number;
  max: number;
}) {
  return (
    <section className={styles.left}>
      <Recursive depth={max} unit={unit} step={step} />
      <h2>Left</h2>
    </section>
  );
}
