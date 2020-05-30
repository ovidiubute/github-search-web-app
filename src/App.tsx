import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { UserCard } from "./search/components/UserCard";
import { fromUserToCardProps } from "./search/mappers/userMapper";
import { SearchResults, searchUsers } from "./search/services/searchService";

export const App = () => {
  const [searchResult, setSearchResult] = useState<SearchResults>({
    userCount: 0,
    nodes: [],
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      endCursor: null,
    },
  });
  const [query, setQuery] = useState<string>("");
  const [dirty, setDirty] = useState<boolean>(false);
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
            onClick={async (e) => {
              e.preventDefault();

              const results = await searchUsers(query);
              setSearchResult(results);
              setDirty(true);
            }}
          />
        </form>
      </section>
      {dirty && (
        <section data-testid="section-results-summary">
          <p>Showing {searchResult.userCount} results.</p>
        </section>
      )}
      {searchResult.nodes.length > 0 && (
        <section data-testid="section-results-full">
          {searchResult.nodes.map((user) => {
            return <UserCard key={user.id} {...fromUserToCardProps(user)} />;
          })}
        </section>
      )}
    </div>
  );
};
