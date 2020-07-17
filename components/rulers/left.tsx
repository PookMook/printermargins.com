import React from "react";
import styles from "./styles.module.css";
import Recursive from "./recursive";

export default function Left({
  unit,
  step,
}: {
  unit: "cm" | "in";
  step: number;
}) {
  return (
    <section className={styles.left}>
      <Recursive depth={2} unit={unit} step={step} />
    </section>
  );
}
