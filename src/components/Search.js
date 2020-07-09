import React from "react";

export const Search = ({ placeholder, handleChange, value }) => {
  return (
    <div>
      <label htmlFor="searchfield">Search Emoji</label>
      <br />
      <input
        value={value}
        type="text"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
