import React from "react";
import { render } from "@testing-library/react";
import { UserCard } from "./UserCard";

it("renders complete user information", () => {
  const { getByText } = render(
    <UserCard
      company="Hootsuite"
      email="test123@gmail.com"
      name="TestUser123"
      location="United States"
      bio="Here is a short testing bio"
    />
  );
  const nameElement = getByText(/TestUser123/i);
  expect(nameElement).toBeInTheDocument();

  const bioElement = getByText(/Here is a short testing bio/i);
  expect(bioElement).toBeInTheDocument();
});
