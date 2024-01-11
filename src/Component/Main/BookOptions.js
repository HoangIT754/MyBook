import React from "react";
import { useState } from "react";

const BookOptions = (props) => {
  const { category, book, onMove } = props;
  const [selectOption, setSelectOption] = useState(category || "");

  const HandleSelect = (e) => {
    setSelectOption(e.target.value);
    onMove(book, e.target.value);
  };

  return (
    <div>
      <div className="BookOption">
        <select value={selectOption} onChange={HandleSelect}>
          <option value="" disabled selected>Move to</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};

export default BookOptions;
