import React from "react";
import styles from "./styles.module.css";
import Recursive from "./recursive";

export default function Right({ unit }: { unit: "cm" | "in" }) {
  return (
    <section className={styles.right}>
      <Recursive depth={15} unit={unit} reverse={true} />
    </section>
  );
}
