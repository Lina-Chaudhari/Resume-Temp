
import React from 'react';

const ColorItem = ({ color, setColor }) => {
  const handleClick = () => {
    setColor(color); 
  };

  return (
    <div
      className="color-item"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    />
  );
};

export default ColorItem;
