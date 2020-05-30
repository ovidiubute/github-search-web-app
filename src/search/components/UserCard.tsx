import * as React from "react";
import { User } from "../types/user";

export type UserCardProps = Omit<User, "login" | "url"> & {
  username: string;
  profileUrl: string;
};

export const UserCard = (props: UserCardProps) => {
  return (
    <div>
      <img src={props.avatarUrl} width={60} height={60} alt="" />
      <header>
        <a href={props.profileUrl} target="_blank" rel="noopener noreferrer">
          {props.name}
        </a>{" "}
        <span>{props.username}</span>{" "}
      </header>
      <div>{props.bio}</div>
    </div>
  );
};
