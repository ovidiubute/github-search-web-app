import * as React from "react";
import "./SearchInput.css";

export const SearchInput = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  const searchInputEl = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const node = searchInputEl?.current;
    node?.focus();
  }, []);

  return (
    <input
      className="searchInput"
      type="text"
      ref={searchInputEl}
      placeholder="Search GitHub users"
      {...props}
    />
  );
};
