import { fireEvent, render, waitForElement } from "@testing-library/react";
import React from "react";
import { App } from "./App";
import * as searchService from "./search/services/searchService";
import {
  buildEmptyResults,
  buildTenResults,
} from "./search/testUtils/userFactory";

jest.mock("./search/services/searchService");

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
      const searchButton = getByText(/Search/i);
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
      getByText(/Search/i).click();

      // Summary of 0 results
      const summaryElement = await waitForElement(() =>
        getByText(/No results/i)
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
      getByText(/Search/i).click();

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
