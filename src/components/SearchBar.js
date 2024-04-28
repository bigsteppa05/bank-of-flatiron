import React, { useState } from "react";

function SearchBar({ onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchTermChange(term);
  };

  return (
    <div>
      <h2>Search Transactions by Description</h2>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;

