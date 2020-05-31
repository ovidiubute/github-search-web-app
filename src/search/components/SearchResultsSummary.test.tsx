import { render } from "@testing-library/react";
import React from "react";
import { SearchResultsSummary } from "./SearchResultsSummary";

describe("SearchResultsSummary", () => {
  it("renders summary of multiple results", () => {
    const { getByText } = render(<SearchResultsSummary userCount={10} />);

    const el = getByText(/Showing 10 results/i);
    expect(el).toBeInTheDocument();
  });

  it("renders summary of 1 result", () => {
    const { getByText } = render(<SearchResultsSummary userCount={1} />);

    const el = getByText(/Showing just one result/i);
    expect(el).toBeInTheDocument();
  });

  it("renders summary of no results", () => {
    const { getByText } = render(<SearchResultsSummary userCount={0} />);

    const el = getByText(/No results/i);
    expect(el).toBeInTheDocument();
  });
});
