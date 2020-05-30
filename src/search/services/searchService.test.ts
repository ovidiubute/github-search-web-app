import * as searchService from "./searchService";

describe("SearchService", () => {
  describe("searchUsers", () => {
    it("should return 10 search results for valid query", async () => {
      expect.assertions(1);

      const searchResults = await searchService.searchUsers("ovidiu");
      expect(searchResults.nodes).toHaveLength(10);
    });
  });
});
