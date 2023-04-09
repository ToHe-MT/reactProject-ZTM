import React from "react";

const SearchBar = ({searchChange}) => {
  return (
    <div className="pa2 tc">
      <input 
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search Kitten"
      onChange={searchChange}
      />
    </div>
  )
}

export default SearchBar;