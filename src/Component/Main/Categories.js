import React from "react";
import Category from "./Category";

const Categories = (props) => {
  const { books, categories, onMove } = props;

  return (
    <div className="ListCategories">
      <div>
        {categories.map((category) => (
          <Category key={category.key} category={category} books={books} onMove={onMove} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
