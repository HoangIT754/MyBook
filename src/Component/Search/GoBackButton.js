import React from "react";
import { Link } from "react-router-dom";

const GoBackButton = (props) => {
  const { onClearSearch } = props;

  return (
    <div className="GoBackButton">
      <Link to="/">
        <button className="close-search" onClick={onClearSearch}>
          Close
        </button>
      </Link>
    </div>
  );
};

export default GoBackButton;
