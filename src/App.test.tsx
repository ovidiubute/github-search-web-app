import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

it("renders search box", () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const searchElement = getByPlaceholderText(/Search GitHub users/);
  expect(searchElement).toBeInTheDocument();

  const searchButton = getByText(/OK/);
  expect(searchButton).toBeInTheDocument();
});
