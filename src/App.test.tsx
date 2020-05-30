import { fireEvent, render, waitForElement } from "@testing-library/react";
import React from "react";
import { App } from "./App";
import * as searchService from "./search/services/searchService";
import { User } from "./search/types/user";

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

function buildTenResults(): searchService.SearchResults {
  return {
    userCount: 10,
    nodes: Array.from({ length: 10 }).map((_, i) => {
      const u: User = {
        id: `${i}`,
        name: `name_${i}`,
        avatarUrl: `avatar_${i}`,
        bio: i % 2 === 1 ? `bio_${i}` : null,
        company: i % 2 === 0 ? `company_${i}` : null,
        email: `email_${i}`,
        location: i % 2 === 0 ? `location_${i}` : null,
        login: `login_${i}`,
        url: `https://google.com/${i}`,
      };

      return u;
    }),
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

  describe("submit valid query", () => {
    it("should display 10 results", async () => {
      (searchService.searchUsers as jest.Mock).mockResolvedValueOnce(
        buildTenResults()
      );

      const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

      // Search
      const searchElement = getByPlaceholderText(/Search GitHub users/);
      fireEvent.change(searchElement, {
        target: {
          value: "test",
        },
      });
      getByText(/OK/).click();

      // Summary of 10 results
      const summaryElement = await waitForElement(() =>
        getByText(/showing 10 results/i)
      );
      expect(summaryElement).toBeInTheDocument();
      expect(searchElement.getAttribute("value")).toBe("test");

      // Results
      expect(getByTestId("section-results-full")).toBeInTheDocument();
    });
  });
});
