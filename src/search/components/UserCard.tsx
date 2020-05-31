import format from "date-fns/format";
import * as React from "react";
import { User } from "../types/user";
import { MapPin } from "./MapPin";
import "./UserCard.css";

export type UserCardProps = Omit<
  User,
  "login" | "url" | "followers" | "following"
> & {
  username: string;
  profileUrl: string;
  followers: number;
  following: number;
};

export const UserCard = (props: UserCardProps) => {
  const prettyDate = format(new Date(props.createdAt), "PP");

  return (
    <div className="userCard">
      <header>
        <img
          className="avatar"
          src={props.avatarUrl}
          width={96}
          height={96}
          alt=""
          loading="lazy"
        />
        <div className="headerInfo">
          <span>{props.followers} Followers</span>
          <span>Joined {prettyDate}</span>
        </div>
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
