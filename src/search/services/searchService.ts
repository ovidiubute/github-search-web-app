import { GraphQLClient } from "graphql-request";
import { User } from "../types/user";

export type SearchResults = {
  userCount: number;
  nodes: Array<User>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string | null;
  };
};

type GraphQLSearchResponse = {
  search: SearchResults;
};

export const searchUsers = async (
  searchTerm: string
): Promise<SearchResults> => {
  if (searchTerm.trim() === "") {
    return Promise.resolve({
      userCount: 0,
      nodes: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        endCursor: null,
      },
    });
  }

  const endpoint = "https://api.github.com/graphql";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  try {
    const data: GraphQLSearchResponse = await graphQLClient.request(
      `{
          search(query: "${searchTerm.trim()}", type: USER, first: 10){
            userCount
            nodes {
              ...on User {
                name
                login
                id
                url
                company
                location
                bio
                avatarUrl
              }
            }
            pageInfo{
              hasNextPage
              hasPreviousPage
              endCursor
            }
          }
        }`
    );

    return Promise.resolve(data.search);
  } catch (e) {
    return Promise.reject(e);
  }
};
