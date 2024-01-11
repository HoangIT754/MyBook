import React from "react";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";

const SearchPage = (props) => {
  const { books, onMove, onSearch, searchBooks, onClearSearch } = props;

  return (
    <div className="SearchPage">
      <SearchBar onSearch={onSearch} onClearSearch={onClearSearch} />
      <SearchResult books={books} onMove={onMove} searchBooks={searchBooks} />
    </div>
  );
};

export default SearchPage;
