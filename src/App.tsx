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
  const searchInputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const node = searchInputEl?.current;
    node?.focus();
  }, []);

  return (
    <div>
      <section>
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
            }}
          />
        </form>
      </section>
      {searchResult.nodes.length > 0 && (
        <section>
          {searchResult.nodes.map((user) => {
            return <UserCard {...fromUserToCardProps(user)} />;
          })}
        </section>
      )}
    </div>
  );
};
