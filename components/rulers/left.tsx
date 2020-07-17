import React from "react";
import styles from "./styles.module.css";
import Recursive from "./recursive";

export default function Left({ unit }: { unit: "cm" | "in" }) {
  return (
    <section className={styles.left}>
      <Recursive depth={15} unit={unit} />
    </section>
  );
}
