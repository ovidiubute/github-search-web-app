export type User = {
  id: string;
  login: string;
  name: string;
  email: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  avatarUrl: string;
};
