import React from "react";
import styles from "./styles.module.css";

const steps = [
  {
    value: 0.1,
    label: "0.1",
  },
  { value: 0.0625, label: "1/16" },
  { value: 0.125, label: "1/8" },
  { value: 0.25, label: "1/4" },
];
const units = [
  {
    value: "in",
    label: "inches",
  },
  { value: "cm", label: "cm" },
];
const max = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

const dimensions = [
  {
    value: ["8.5in", "11in"],
    label: "Letter Portrait",
  },
  {
    value: ["11in", "8.5in"],
    label: "Letter landscape",
  },
  {
    value: ["21cm", "29.7cm"],
    label: "A4 Portrait",
  },
  {
    value: ["29.7cm", "21cm"],
    label: "A4 landscape",
  },
  {
    value: ["11in", "17in"],
    label: "tabloid portrait",
  },
  {
    value: ["17in", "11in"],
    label: "tabloid landscape",
  },
];

export default function Pickers({
  setStep,
  setDimensions,
  setUnit,
  setMax,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setDimensions: React.Dispatch<React.SetStateAction<string[]>>;
  setUnit: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section className={styles.pickers}>
      <div>
        <label>
          Unit:{" "}
          <select onChange={(e) => setUnit(e.target.value)}>
            {units.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          maximum:{" "}
          <select onChange={(e) => setMax(Number(e.target.value))}>
            {max.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Step:{" "}
          <select onChange={(e) => setStep(Number(e.target.value))}>
            {steps.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Print dimensions:{" "}
          <select onChange={(e) => setDimensions(e.target.value.split(","))}>
            {dimensions.map((s) => (
              <option key={s.value.join(",")} value={s.value.join(",")}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
