import React from "react";

const Search = ({ inputval }) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={inputval}
        />
      </div>
    </div>
  );
};

export default Search;
