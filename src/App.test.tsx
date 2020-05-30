import { render, waitForElement } from "@testing-library/react";
import React from "react";
import { App } from "./App";
import * as searchService from "./search/services/searchService";

jest.mock("./search/services/searchService");

function buildEmptyResults(): searchService.SearchResults {
  return {
    userCount: 0,
    nodes: [],
    pageInfo: {
      endCursor: null,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}

describe("Main App", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("initial state", () => {
    it("renders empty search box and submit button", () => {
      const { getByPlaceholderText, getByText, getByTestId } = render(<App />);

      // Input
      const searchElement = getByPlaceholderText(/Search GitHub users/);
      expect(searchElement).toBeInTheDocument();
      expect(searchElement.getAttribute("value")).toBe("");

      // Submit
      const searchButton = getByText(/OK/);
      expect(searchButton).toBeInTheDocument();

      // No results
      expect(() => getByTestId("section-results-summary")).toThrowError();
      expect(() => getByTestId("section-results-full")).toThrowError();
    });
  });

  describe("submit empty query", () => {
    it("should display 0 results", async () => {
      (searchService.searchUsers as jest.Mock).mockResolvedValueOnce(
        buildEmptyResults()
      );

      const { getByText, getByTestId } = render(<App />);

      // Search
      getByText(/OK/).click();

      // Summary of 0 results
      const summaryElement = await waitForElement(() =>
        getByText(/showing 0 results/i)
      );
      expect(summaryElement).toBeInTheDocument();

      // No results
      expect(() => getByTestId("section-results-full")).toThrowError();
    });
  });
});
