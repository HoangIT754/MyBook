import React, { useState } from "react";

const SearchInput = (props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    const inputValue = e.target.value;
    if (inputValue != null) {
      setQuery(inputValue);
      onSearch(inputValue);
    } else {
      setQuery("");
    }
  };

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={query}
        placeholder="Search by title, author, or ISBN"
        onChange={handleQuery}
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
