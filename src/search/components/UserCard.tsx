import * as React from "react";
import { User } from "../types/user";
import { MapPin } from "./MapPin";
import "./UserCard.css";

export type UserCardProps = Omit<User, "login" | "url"> & {
  username: string;
  profileUrl: string;
};

export const UserCard = (props: UserCardProps) => {
  return (
    <div className="userCard">
      <header>
        <img
          className="avatar"
          src={props.avatarUrl}
          width={96}
          height={96}
          alt=""
        />
      </header>
      <section>
        <aside>
          <a
            className="profileName"
            href={props.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>{" "}
          <span className="userName">{props.username}</span>
        </aside>
        {props.location && (
          <div>
            <MapPin />
            <span className="userLocation">{props.location}</span>
          </div>
        )}
        {props.bio && <p className="userBio">{props.bio}</p>}
      </section>
    </div>
  );
};
