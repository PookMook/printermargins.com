import React from "react";
import styles from "./styles.module.css";
import Right from "~/components/rulers/right";
import Left from "~/components/rulers/left";

export default function Main() {
  return (
    <main className={styles.main}>
      <Right unit={"in"} />
      <Left unit={"in"} />
      <p>Hello world</p>
    </main>
  );
}
