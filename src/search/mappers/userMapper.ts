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
    createdAt,
  } = user;

  let followersCount = 0;
  if (user.followers !== undefined) {
    followersCount = user.followers.totalCount;
  }

  let followingCount = 0;
  if (user.following !== undefined) {
    followingCount = user.following.totalCount;
  }

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
