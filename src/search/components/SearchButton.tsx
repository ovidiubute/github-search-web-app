import * as React from "react";
import "./SearchButton.css";

export const SearchButton = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input className="searchButton" type="submit" value="Search" {...props} />
  );
};
