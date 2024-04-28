import React from "react";

function SearchBar({ onSearchTermChange }) {
  const handleChange = (e) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
