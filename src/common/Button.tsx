import * as React from "react";
import "./Button.css";

export const Button = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      {...props}
      className={`button ${props.className ? props.className : ""}`}
    />
  );
};
