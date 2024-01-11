import React from "react";
import BookOptions from "./BookOptions";

const Book = (props) => {
  const { categoryKey, book, onMove } = props;

  return (
    <li>
      <div className="Book">
        <div className="TopBook">
          <div
            className="BookCover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                book.imageLinks && book.imageLinks.thumbnail
                  ? `url(${book.imageLinks.thumbnail})`
                  : "",
            }}
          ></div>
          <BookOptions category={categoryKey} book={book} onMove={onMove} />
        </div>
        <div className="TitleBook">{book.title}</div>
        <div className="Author">{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
