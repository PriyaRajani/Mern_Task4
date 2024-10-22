import React, { useState } from 'react';
import Button from './components/Buttons';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const Click = (val) => {
    if (val === '=') {
      calculateResult();
    } else if (val === 'C') {
      clearDisplay();
    } else if (val === '←') {
      setDisplay(display.slice(0, -1)); // Backspace functionality
    } else {
      setDisplay(display + val);
    }
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  const buttons = [
    'C', '%', '←', '=', 
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '+', 
    '**', '0', '.', '-'
  ];

  return (
    <div className="calculator-container">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        {buttons.map((buttonval, index) => (
          <Button key={index} value={buttonval} handleClick={Click} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
