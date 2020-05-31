import * as React from "react";
import { Button } from "../../common/Button";
import { SearchResults, searchUsers } from "../services/searchService";
import "./SearchFormSection.css";
import { SearchInput } from "./SearchInput";

export type SearchFormSectionProps = {
  query: string;
  setQuery: (query: string) => void;
  setDirty: (dirty: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setSearchResults: (searchResults: SearchResults) => void;
  isLoading: boolean;
};

export const SearchFormSection = (props: SearchFormSectionProps) => {
  return (
    <section className="sectionForm" data-testid="section-form">
      <form>
        <SearchInput
          value={props.query}
          onChange={(e) => {
            props.setQuery(e.target.value);
          }}
        />
        <Button
          type="submit"
          isLoading={props.isLoading}
          onClick={async (e) => {
            e.preventDefault();

            props.setIsLoading(true);
            const results = await searchUsers(props.query);
            props.setSearchResults(results);
            props.setDirty(true);
            props.setIsLoading(false);
          }}
        >
          Search
        </Button>
      </form>
    </section>
  );
};
