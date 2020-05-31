import { UserCardProps } from "../components/UserCard";
import { User } from "../types/user";

export const fromUserToCardProps = (user: User): UserCardProps => {
  const {
    id,
    url,
    bio,
    login,
    avatarUrl,
    company,
    location,
    name,
    following: { totalCount: followingCount },
    followers: { totalCount: followersCount },
    createdAt,
  } = user;

  return {
    profileUrl: url,
    username: login,
    id,
    bio,
    avatarUrl,
    company,
    location,
    name,
    followers: followersCount,
    following: followingCount,
    createdAt,
  };
};
