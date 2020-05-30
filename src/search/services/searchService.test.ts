import * as graphqlRequest from "graphql-request";
import { buildTenResults } from "../testUtils/userFactory";
import * as searchService from "./searchService";

jest.mock("graphql-request");

function buildGraphTestClient(response: searchService.SearchResults) {
  return {
    request: () => Promise.resolve({ search: response }),
  };
}

describe("SearchService", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("searchUsers", () => {
    it("should return 10 search results for valid query", async () => {
      expect.assertions(1);

      (graphqlRequest.GraphQLClient as jest.Mock).mockImplementationOnce(() =>
        buildGraphTestClient(buildTenResults())
      );

      const searchResults = await searchService.searchUsers("ovidiu");
      expect(searchResults.nodes).toHaveLength(10);
    });
  });
});
