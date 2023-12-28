import React from "react";
import BookOptions from "./BookOptions";

const Book = (props) => {
  const category = props.categoryKey;
  const book = props.book;
  const onMove = props.onMove;

  return (
    <li>
      <div className="Book">
        <div className="TopBook">
          <div
            className="BookCover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          ></div>
          <BookOptions category={category} book={book} onMove={onMove} />
        </div>
        <div className="TitleBook">{book.title}</div>
        <div className="Author">{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
