import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { UserCard } from "./search/components/UserCard";
import { fromUserToCardProps } from "./search/mappers/userMapper";
import { SearchResults, searchUsers } from "./search/services/searchService";

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
  const searchInputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = searchInputEl?.current;
    node?.focus();
  }, []);

  return (
    <div className="main">
      <section data-testid="section-form">
        <form>
          <input
            type="text"
            placeholder="Search GitHub users"
            ref={searchInputEl}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <input
            type="submit"
            value="OK"
            disabled={isLoading}
            onClick={async (e) => {
              e.preventDefault();

              setIsLoading(true);
              const results = await searchUsers(query);
              setSearchResults(results);
              setIsLoading(false);
              setDirty(true);
            }}
          />
        </form>
      </section>
      {dirty && (
        <section data-testid="section-results-summary">
          <p>Showing {searchResults.userCount} results.</p>
        </section>
      )}
      {searchResults.nodes.length > 0 && (
        <>
          <section data-testid="section-results-full">
            {searchResults.nodes.map((user) => {
              return <UserCard key={user.id} {...fromUserToCardProps(user)} />;
            })}
          </section>
          <section data-testid="section-pagination">
            {searchResults.pageInfo.hasPreviousPage && (
              <button
                type="button"
                disabled={isLoading}
                onClick={async (e) => {
                  e.preventDefault();

                  setIsLoading(true);
                  const results = await searchUsers(
                    query,
                    searchResults.pageInfo.startCursor
                  );
                  setSearchResults(results);
                  setIsLoading(false);
                }}
              >
                Previous
              </button>
            )}
            {searchResults.pageInfo.hasNextPage && (
              <button
                type="button"
                disabled={isLoading}
                onClick={async (e) => {
                  e.preventDefault();

                  const results = await searchUsers(
                    query,
                    null,
                    searchResults.pageInfo.endCursor
                  );
                  setSearchResults(results);
                  setIsLoading(false);
                }}
              >
                Next
              </button>
            )}
          </section>
        </>
      )}
    </div>
  );
};
