import React from "react";
import SearchInput from "./SearchInput";
import GoBackButton from "./GoBackButton";

const SearchBar = (props) => {
  const { onSearch, onClearSearch } = props;

  return (
    <div className="SearchBar">
      <GoBackButton onClearSearch={onClearSearch} />
      <SearchInput onSearch={onSearch} />
    </div>
  );
};

export default SearchBar;
