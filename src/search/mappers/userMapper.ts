import { UserCardProps } from "../components/UserCard";
import { User } from "../types/user";

export const fromUserToCardProps = (user: User): UserCardProps => {
  const { id, url, bio, login, avatarUrl, company, location, name } = user;

  return {
    profileUrl: url,
    username: login,
    id,
    bio,
    avatarUrl,
    company,
    location,
    name,
  };
};
