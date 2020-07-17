import React from "react";
import styles from "./styles.module.css";
import Recursive from "./recursive";

export default function Right({
  unit,
  step,
  max,
}: {
  unit: "cm" | "in";
  step: number;
  max: number;
}) {
  return (
    <section className={styles.right}>
      <Recursive depth={max} unit={unit} reverse={true} step={step} />
    </section>
  );
}
