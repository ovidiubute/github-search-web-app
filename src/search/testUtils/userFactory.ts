import { SearchResults } from "../services/searchService";
import { User } from "../types/user";

export function buildEmptyResults(): SearchResults {
  return {
    userCount: 0,
    nodes: [],
    pageInfo: {
      startCursor: null,
      endCursor: null,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}

export function buildTenResults(): SearchResults {
  return {
    userCount: 10,
    nodes: Array.from({ length: 10 }).map((_, i) => {
      const u: User = {
        id: `${i}`,
        name: `name_${i}`,
        avatarUrl: `avatar_${i}`,
        bio: i % 2 === 1 ? `bio_${i}` : null,
        company: i % 2 === 0 ? `company_${i}` : null,
        location: i % 2 === 0 ? `location_${i}` : null,
        login: `login_${i}`,
        url: `https://google.com/${i}`,
        followers: { totalCount: i * 5 },
        following: { totalCount: i * 2 },
        createdAt: new Date().toDateString(),
      };

      return u;
    }),
    pageInfo: {
      startCursor: null,
      endCursor: null,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}
