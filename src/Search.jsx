import React from "react";
import { GoSearch } from "react-icons/go";

const Search = ({inputval}) => {
 
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={inputval}
        />
        <button type="submit" className="searchButton">
          <GoSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
