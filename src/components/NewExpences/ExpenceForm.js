import React, { useState } from "react";

import "./ExpenceForm.css";

const ExpenceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHAndler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHAndler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHAndler = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expence__controls">
        <div className="new-expence__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHAndler} />
        </div>
      </div>
      <div className="new-expence__controls">
        <div className="new-expence__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHAndler}
          />
        </div>
      </div>
      <div className="new-expence__controls">
        <div className="new-expence__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHAndler} />
        </div>
      </div>
      <div className="new-expence__action">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default ExpenceForm;
