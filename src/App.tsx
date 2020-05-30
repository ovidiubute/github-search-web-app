import React, { useState } from "react";
import "./App.css";
import { SearchButton } from "./search/components/SearchButton";
import { SearchInput } from "./search/components/SearchInput";
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

  return (
    <div>
      <section>
        <form>
          <SearchInput
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <SearchButton
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
