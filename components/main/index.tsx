import React from "react";
import styles from "./styles.module.css";
import Right from "~/components/rulers/right";

export default function Main() {
  return (
    <main className={styles.main}>
      <Right />
      <p>Hello world</p>
    </main>
  );
}
