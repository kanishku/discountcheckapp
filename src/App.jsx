import React, { useState } from 'react';
import './App.css';

const DiscountCalculator = () => {
 const [actualPrice, setActualPrice] = useState(0);
 const [discount, setDiscount] = useState(0);
 const [savings, setSavings] = useState(0);
 const [netAmount, setNetAmount] = useState(0);

 const calculate = () => {
    setSavings((actualPrice * discount) / 100);
    setNetAmount(actualPrice - savings);
 };

 const clear = () => {
    setActualPrice(0);
    setDiscount(0);
    setSavings(0);
    setNetAmount(0);
 };

 return (
    <div className="calculator">
      <h1>Discount Calculator</h1>
      <div className="inputs">
        <label>
          Enter Actual Price:
          <input
            type="number"
            value={actualPrice}
            onChange={(e) => setActualPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Enter Discount %:
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculate}>CALCULATE</button>
      <button onClick={clear}>CLEAR</button>
      <div className="outputs">
        <p>
          Your Savings:
          <span>₹ {savings.toFixed(2)}</span>
        </p>
        <p>
          Net Amount:
          <span>₹ {netAmount.toFixed(2)}</span>
        </p>
      </div>
    </div>
 );
};

export default DiscountCalculator;