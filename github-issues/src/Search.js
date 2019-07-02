import React from "react";

const Search = (props) => {
  return (
      <>
      <input
        placeholder='Insert Your Repo'
        value={props.searchRepo}
        onChange={props.onSearchChange}
      />
      <button type='submit' onClick={props.handleSearch}>Search</button>
      </>
  );
};

export default Search;
