import { render } from "@testing-library/react";
import React from "react";
import { UserCard } from "./UserCard";

it("renders complete user information", () => {
  const { getByText } = render(
    <UserCard
      id="XVASDIOL"
      username="testuser"
      company="Hootsuite"
      profileUrl="https://github.com/ovidiu"
      name="TestUser123"
      location="United States"
      bio="Here is a short testing bio"
      followers={3}
      following={50}
      createdAt="2019-05-02T12:08:02Z"
      avatarUrl="https://avatars0.githubusercontent.com/u/63847?u=4d62a73a474980e391b256df9568f0b052e86ccb&v=4"
    />
  );
  const nameElement = getByText(/TestUser123/i);
  expect(nameElement).toBeInTheDocument();

  const bioElement = getByText(/Here is a short testing bio/i);
  expect(bioElement).toBeInTheDocument();

  const followersElement = getByText(/3 Followers/i);
  expect(followersElement).toBeInTheDocument();

  const createdAtElement = getByText(/Joined May 2, 2019/i);
  expect(createdAtElement).toBeInTheDocument();
});
