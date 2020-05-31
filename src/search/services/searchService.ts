import { GraphQLClient } from "graphql-request";
import { User } from "../types/user";

export type SearchResults = {
  userCount: number;
  nodes: Array<User>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
};

type GraphQLSearchResponse = {
  search: SearchResults;
};

export const searchUsers = async (
  searchTerm: string,
  beforeCursor?: string | null,
  afterCursor?: string | null
): Promise<SearchResults> => {
  const validQuery = searchTerm.trim();

  if (validQuery === "") {
    return Promise.resolve({
      userCount: 0,
      nodes: [],
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null,
      },
    });
  }

  const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });

  const maybeAfterClause = afterCursor ? `, after: "${afterCursor}"` : "";
  const maybeBeforeClause = beforeCursor ? `, before: "${beforeCursor}"` : "";

  const paginationDirection = beforeCursor ? -1 : 1;
  const maybeLimit =
    paginationDirection === 1
      ? ", first: 10"
      : paginationDirection === -1
      ? ", last: 10"
      : "";

  try {
    const data: GraphQLSearchResponse = await graphQLClient.request(
      `{
          search(
            query: "${validQuery}", 
            type: USER, 
            ${maybeLimit}
            ${maybeAfterClause}
            ${maybeBeforeClause}
          ) {
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
              startCursor
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
