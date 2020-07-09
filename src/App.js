import React, { useState, useEffect } from "react";
import "./App.css";
import Emojis from "./components/Emojis.json";
import { Emoji } from "./components/Emoji";
import { Search } from "./components/Search";
function App() {
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  useEffect(() => {
    const filteredEmojis = Emojis.filter((emoji) => {
      return emoji.title.toLowerCase().includes(searchField.toLowerCase());
    });
    setSearchResults(filteredEmojis);
  }, [searchField]);

  return (
    <div className="App">
      <Search placeholder="find emoji" handleChange={handleChange} />
      {searchResults.map((emoji, i) => (
        <Emoji key={i} emoji={emoji}>
          {emoji.title}
        </Emoji>
      ))}
    </div>
  );
}

export default App;
