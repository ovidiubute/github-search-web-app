import React from "react";
import "./App.css";
import { SearchInput } from "./search/components/SearchInput";
import { UserCard } from "./search/components/UserCard";

export const App = function () {
  const testResults = [
    {
      name: "Ovidiu Curcan",
      email: "",
      company: null,
      location: "Amsterdam, NL",
      bio: "Fake bio",
    },
  ];

  return (
    <div>
      <section>
        <SearchInput />
      </section>
      <section>
        <UserCard {...testResults[0]} />
      </section>
    </div>
  );
};
