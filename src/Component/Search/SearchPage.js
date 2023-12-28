import React from "react";

import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";

const SearchPage = (props) => {
  const books = props.books;
  const onMove = props.onMove;
  const onSearch = props.onSearch;
  const searchBooks = props.searchBooks;
  const onClearSearch = props.onClearSearch;

  return (
    <div className="SearchPage">
      <SearchBar onSearch={onSearch} onClearSearch={onClearSearch}/>
      <SearchResult
        books={books}
        onMove={onMove}
        searchBooks={searchBooks}
      />
    </div>
  );
};

export default SearchPage;
