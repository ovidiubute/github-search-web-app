import React from "react";
import "./App.css";
import { SearchInput } from "./search/components/SearchInput";
import { UserCard, UserCardProps } from "./search/components/UserCard";

export const App = function () {
  const testResults: Array<UserCardProps> = [
    {
      username: "ovidiu",
      name: "Ovidiu Curcan",
      profileUrl: "https://github.com/ovidiu",
      email: "",
      company: null,
      location: "Amsterdam, NL",
      bio: "Fake bio",
      avatarUrl: "https://avatars3.githubusercontent.com/u/271461?v=4",
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
