import React from "react";
import Categories from "./Categories";
import SearchButton from "./SearchButton";

const MainPage = (props) => {
  const { books, categories, onMove } = props;

  return (
    <div className="MainPage">
      <div className="MainPageTitle">
        <h1>My Reads</h1>
      </div>
      <Categories books={books} categories={categories} onMove={onMove} />
      <SearchButton />
    </div>
  );
};

export default MainPage;
