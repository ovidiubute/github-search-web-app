export type User = {
  id: string;
  login: string;
  url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  avatarUrl: string;
  followers?: {
    totalCount: number;
  };
  following?: {
    totalCount: number;
  };
  createdAt: string;
};
