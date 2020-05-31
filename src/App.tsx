import React, { useState } from "react";
import "./App.css";
import { PaginationControl } from "./search/components/PaginationControl";
import { SearchFormSection } from "./search/components/SearchFormSection";
import { SearchResultsSection } from "./search/components/SearchResultsSection";
import { SearchResultsSummary } from "./search/components/SearchResultsSummary";
import { SearchResults } from "./search/services/searchService";

export const App = () => {
  const [searchResults, setSearchResults] = useState<SearchResults>({
    userCount: 0,
    nodes: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: null,
      endCursor: null,
    },
  });
  const [query, setQuery] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="main">
      <SearchFormSection
        setQuery={setQuery}
        setDirty={setDirty}
        query={query}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setSearchResults={setSearchResults}
      />
      {dirty && <SearchResultsSummary userCount={searchResults.userCount} />}
      {searchResults.nodes.length > 0 && (
        <>
          <PaginationControl
            hasNextPage={searchResults.pageInfo.hasNextPage}
            hasPreviousPage={searchResults.pageInfo.hasPreviousPage}
            endCursor={searchResults.pageInfo.endCursor}
            startCursor={searchResults.pageInfo.startCursor}
            query={query}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setSearchResults={setSearchResults}
          />
          <SearchResultsSection searchResults={searchResults} />
        </>
      )}
    </div>
  );
};
