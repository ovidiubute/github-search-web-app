import * as graphqlRequest from "graphql-request";
import { buildTenResults } from "../testUtils/userFactory";
import * as searchService from "./searchService";

jest.mock("graphql-request");

describe("SearchService", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("searchUsers", () => {
    it("should build valid GraphQL query for default forward search", async () => {
      expect.assertions(4);

      function buildGraphTestClient(response: searchService.SearchResults) {
        return {
          request: (graphqlQuery: string) => {
            expect(graphqlQuery).toMatch(/query: "ovidiu",/i);
            expect(graphqlQuery).toMatch(/, first: 10/i);
            expect(graphqlQuery).not.toMatch(/, last: 10/i);

            return Promise.resolve({ search: response });
          },
        };
      }

      (graphqlRequest.GraphQLClient as jest.Mock).mockImplementationOnce(() =>
        buildGraphTestClient(buildTenResults())
      );

      const searchResults = await searchService.searchUsers("ovidiu");
      expect(searchResults.nodes).toHaveLength(10);
    });
  });

  it("should build valid GraphQL query for explicit forward search", async () => {
    expect.assertions(6);

    function buildGraphTestClient(response: searchService.SearchResults) {
      return {
        request: (graphqlQuery: string) => {
          expect(graphqlQuery).toMatch(/query: "ovidiu",/i);
          expect(graphqlQuery).toMatch(/, first: 10/i);
          expect(graphqlQuery).toMatch(/, after: "xhu87"/i);
          expect(graphqlQuery).not.toMatch(/, last: 10/i);
          expect(graphqlQuery).not.toMatch(/, before: /i);

          return Promise.resolve({ search: response });
        },
      };
    }

    (graphqlRequest.GraphQLClient as jest.Mock).mockImplementationOnce(() =>
      buildGraphTestClient(buildTenResults())
    );

    const searchResults = await searchService.searchUsers(
      "ovidiu",
      null,
      "xhu87"
    );
    expect(searchResults.nodes).toHaveLength(10);
  });

  it("should build valid GraphQL query for valid backward search", async () => {
    expect.assertions(6);

    function buildGraphTestClient(response: searchService.SearchResults) {
      return {
        request: (graphqlQuery: string) => {
          expect(graphqlQuery).toMatch(/query: "ovidiu",/i);
          expect(graphqlQuery).toMatch(/, last: 10/i);
          expect(graphqlQuery).toMatch(/, before: "Xaji8u"/i);
          expect(graphqlQuery).not.toMatch(/, first: 10/i);
          expect(graphqlQuery).not.toMatch(/, after: /i);

          return Promise.resolve({ search: response });
        },
      };
    }

    (graphqlRequest.GraphQLClient as jest.Mock).mockImplementationOnce(() =>
      buildGraphTestClient(buildTenResults())
    );

    const searchResults = await searchService.searchUsers("ovidiu", "Xaji8u");
    expect(searchResults.nodes).toHaveLength(10);
  });
});
