import * as React from "react";
import { Button } from "../../common/Button";
import { SearchResults, searchUsers } from "../services/searchService";
import "./PaginationControl.css";

export type PaginationControlProps = {
  isLoading: boolean;
  query: string;
  setIsLoading: (value: boolean) => void;
  setSearchResults: (newResults: SearchResults) => void;
} & SearchResults["pageInfo"];

export const PaginationControl = (props: PaginationControlProps) => {
  return (
    <section className="sectionPagination" data-testid="section-pagination">
      {props.hasPreviousPage && (
        <Button
          type="button"
          value="Previous"
          disabled={props.isLoading}
          onClick={async (e) => {
            e.preventDefault();

            props.setIsLoading(true);
            const results = await searchUsers(props.query, props.startCursor);
            props.setSearchResults(results);
            props.setIsLoading(false);
          }}
        />
      )}
      {props.hasNextPage && (
        <Button
          type="button"
          value="Next"
          className="nextPageButton"
          disabled={props.isLoading}
          onClick={async (e) => {
            e.preventDefault();

            const results = await searchUsers(
              props.query,
              null,
              props.endCursor
            );
            props.setSearchResults(results);
            props.setIsLoading(false);
          }}
        />
      )}
    </section>
  );
};
