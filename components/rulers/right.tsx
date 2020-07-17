import React from "react";
import styles from "./styles.module.css";
import Recursive from "./recursive";

export default function Right({
  unit,
  step,
}: {
  unit: "cm" | "in";
  step: number;
}) {
  return (
    <section className={styles.right}>
      <Recursive depth={2} unit={unit} reverse={true} step={step} />
    </section>
  );
}
