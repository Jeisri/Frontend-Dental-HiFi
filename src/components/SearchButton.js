import React, { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  const [workshopMode, setWorkshopMode] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleClear = () => {
    setSearchText('');
    setWorkshopMode('');
    setDateTime('');
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '16px',
        }}
      >
        SEARCH FOR EVENTS HERE
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            color: 'black',
            transition: 'box-shadow 0.3s ease',
          }}
          placeholder="TYPE HERE"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            color: 'black',
            transition: 'box-shadow 0.3s ease',
          }}
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
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            color: 'black',
            transition: 'box-shadow 0.3s ease',
          }}
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
          onClick={handleClear}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default App;
