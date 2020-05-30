import React from "react";
import { render } from "@testing-library/react";
import { UserCard } from "./UserCard";

it("renders complete user information", () => {
  const { getByText } = render(
    <UserCard
      username="testuser"
      company="Hootsuite"
      profileUrl="https://github.com/ovidiu"
      email="test123@gmail.com"
      name="TestUser123"
      location="United States"
      bio="Here is a short testing bio"
      avatarUrl="https://avatars0.githubusercontent.com/u/63847?u=4d62a73a474980e391b256df9568f0b052e86ccb&v=4"
    />
  );
  const nameElement = getByText(/TestUser123/i);
  expect(nameElement).toBeInTheDocument();

  const bioElement = getByText(/Here is a short testing bio/i);
  expect(bioElement).toBeInTheDocument();
});
