import * as React from "react";

export type SearchResultsSummaryProps = {
  userCount: number;
};

export const SearchResultsSummary = (props: SearchResultsSummaryProps) => {
  let message = `Showing ${props.userCount} results 😎`;

  if (props.userCount === 0) {
    message = "No results 😥";
  } else if (props.userCount === 1) {
    message = "Showing just one result 😲";
  }

  return (
    <section data-testid="section-results-summary">
      <p>{message}</p>
    </section>
  );
};
