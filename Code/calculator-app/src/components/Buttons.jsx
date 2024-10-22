import React from 'react';

const Btn = ({ value, handleClick }) => {
  return (
    <button className="calculator-button" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Btn;
