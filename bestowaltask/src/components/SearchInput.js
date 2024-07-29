import React from "react";
import { FaSearch, FaMicrophone } from 'react-icons/fa';
const SearchInput = () => {
  return (
    <div className="search-input">
      <FaSearch className="material-icons" />
      <input type="text" placeholder="Search" />
      <FaMicrophone className="material-icons" />
    </div>
  );
};

export default SearchInput;