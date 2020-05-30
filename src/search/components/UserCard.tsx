import * as React from "react";
import { User } from "../types/user";

export type UserCardProps = User;

export const UserCard = (props: UserCardProps) => {
  return (
    <div>
      <header>{props.name}</header>
      <div>{props.bio}</div>
    </div>
  );
};
