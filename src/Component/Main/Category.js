import React from "react";
import Book from "./Book";

const Category = (props) => {
  const { category, books, onMove } = props;

  const ListBookOfCategory = books.filter(
    (book) => book.shelf === category.key
  );

  return (
    <div className="Category">
      <div className="CategoryTitle">
        <h2>{category.name}</h2>
      </div>
      <div className="ListBook">
        <ul>
          {ListBookOfCategory.map((book) => (
            <Book
              key={book.id}
              categoryKey={category.key}
              book={book}
              onMove={onMove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
