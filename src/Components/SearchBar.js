import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const onSearchSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment icon">
      <form className="ui form" onSubmit={onSearchSubmit}>
        <div className="ui search field">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search videos..."
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
