import React from "react";

const right = {
  width: "0",
  height: "0",
  display: "inline-block",
  padding: 0,
  marginLeft: "0.1in",
  borderStyle: "solid",
  borderWidth: "0.05in 0 0.05in 0.1in",
  borderColor: "transparent transparent transparent black",
};

export function RightTriangle() {
  return <div style={right} />;
}

const left = {
  width: "0",
  height: "0",
  display: "inline-block",
  padding: 0,
  marginRight: "0.1in",
  borderStyle: "solid",
  borderWidth: "0.05in 0.1in 0.05in 0in",
  borderColor: "transparent black transparent transparent",
};

export function LeftTriangle() {
  return <div style={left} />;
}
