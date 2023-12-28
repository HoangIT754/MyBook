import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import * as BooksAPI from "./Component/BooksAPI";
import MainPage from "./Component/Main/MainPage";
import SearchPage from "./Component/Search/SearchPage";

function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [searchBooks, setSearchedBooks] = useState([]);

  const categories = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setMyBooks(books);
      })
      .catch((error) => {
        console.log("Error fetching books:", error);
      });
  }, []);

  const moveBook = (book, category) => {
    BooksAPI.update(book, category)
      .then(() => {
        let updatedBooks = myBooks.filter((b) => b.id !== book.id);

        if (category !== "none") {
          book.shelf = category;
          updatedBooks = [...updatedBooks, book];
        }

        setMyBooks(updatedBooks);
      })
      .catch((error) => {
        console.log("Error updating book:", error);
      });
  };

  const searchBook = (query) => {
    const maxResults = 50;

    BooksAPI.search(query, maxResults)
      .then((searchedBooks) => {
        if (setSearchedBooks != null) {
          setSearchedBooks(searchedBooks);
        } else {
          setSearchedBooks([]);
        }
      })
      .catch((error) => {
        console.log("Error searching books:", error);
      });
  };

  const clearSearch = () => {
    setSearchedBooks([]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              books={myBooks}
              categories={categories}
              onMove={moveBook}
            />
          }
        />

        <Route
          exact
          path="/Search"
          element={
            <SearchPage
              books={myBooks}
              onMove={moveBook}
              onSearch={searchBook}
              searchBooks={searchBooks}
              onClearSearch={clearSearch}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
  