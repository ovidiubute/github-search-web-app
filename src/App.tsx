import React from "react";
import "./App.css";
import { SearchInput } from "./search/components/SearchInput";
import { SearchButton } from "./search/components/SearchButton";

export const App = () => {
  return (
    <div>
      <section>
        <form>
          <SearchInput />
          <SearchButton />
        </form>
      </section>
    </div>
  );
};
