import { User } from "../types/user";
import { UserCardProps } from "../components/UserCard";

export const fromUserToCardProps = (user: User): UserCardProps => {
  const {
    id,
    url,
    bio,
    login,
    avatarUrl,
    company,
    email,
    location,
    name,
  } = user;

  return {
    profileUrl: url,
    username: login,
    id,
    bio,
    avatarUrl,
    company,
    email,
    location,
    name,
  };
};
