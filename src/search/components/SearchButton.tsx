import * as React from "react";

export const SearchButton = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <input type="submit" value="OK" {...props} />;
};
