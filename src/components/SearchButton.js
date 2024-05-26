import React, { useState } from 'react';
import './SearchButton.css'; 
const SearchButton = () => {
  const [searchText, setSearchText] = useState('');
  const [workshopMode, setWorkshopMode] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleClear = () => {
    setSearchText('');
    setWorkshopMode('');
    setDateTime('');
  };

  return (
    <div className="container">
      <h2 className="heading">SEARCH FOR EVENTS HERE</h2>
      <div className="inputContainer">
        <input
          type="text"
          className="inputField"
          placeholder="TYPE HERE"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="selectField"
          value={workshopMode}
          onChange={(e) => setWorkshopMode(e.target.value)}
        >
          <option value="">WORKSHOP MODE</option>
          <option value="Workshop A">Workshop A</option>
          <option value="Workshop B">Workshop B</option>
          {/* For more workshop mode options.. yaha add karo */}
        </select>
        <input
          type="datetime-local"
          className="dateTimeField"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button className="clearButton" onClick={handleClear}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
