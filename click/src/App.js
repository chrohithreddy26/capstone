import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="click-counter-container">
      <button className="click-button" onClick={handleButtonClick}>
        Click me
      </button>
      <p className="click-count">Click count: {clickCount}</p>
    </div>
  );
};

export default ClickCounter;
