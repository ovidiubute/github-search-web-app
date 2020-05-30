import * as React from "react";

export const SearchInput = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <input type="text" placeholder="Search GitHub users" {...props} />;
};
