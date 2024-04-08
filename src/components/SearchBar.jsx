import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {}
    </div>
  );
};

export default SearchBar;
