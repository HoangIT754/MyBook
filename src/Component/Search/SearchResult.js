import React from "react";
import Book from "../Main/Book";

const SearchResult = (props) => {
  const books = props.books;
  const onMove = props.onMove;
  const searchBooks = props.searchBooks;

  if (!Array.isArray(searchBooks) || searchBooks.length === 0 || !Array.isArray(books)) {
    return <div className="SearchResult"></div>;
  }

  const myBooksMap = {};
  books.forEach((book) => {
    myBooksMap[book.id] = book.shelf;
  });

  const updatedBooks = searchBooks.map((book) => {
    const shelf = myBooksMap[book.id] || "none";
    return { ...book, shelf };
  });

  return (
    <div className="SearchResult">
      <ul>
        {updatedBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            category={book.shelf}
            onMove={onMove}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
