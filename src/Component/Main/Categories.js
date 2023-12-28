import React from "react";
import Category from "./Category";

const Categories = (props) => {
  const books = props.books;
  const categories = props.categories;
  const onMove = props.onMove;

  return (
    <div className="ListCategories">
      <div>
        {categories.map((category) => (
          <Category
            key={category.key}
            category={category}
            books={books}
            onMove={onMove}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
