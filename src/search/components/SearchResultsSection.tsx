import * as React from "react";
import { fromUserToCardProps } from "../mappers/userMapper";
import { SearchResults } from "../services/searchService";
import "./SearchResultsSection.css";
import { UserCard } from "./UserCard";

export type SearchResultsSectionProps = {
  searchResults: SearchResults;
};

export const SearchResultsSection = (props: SearchResultsSectionProps) => {
  return (
    <section className="sectionResults" data-testid="section-results-full">
      {props.searchResults.nodes.map((user) => {
        return <UserCard key={user.id} {...fromUserToCardProps(user)} />;
      })}
    </section>
  );
};
