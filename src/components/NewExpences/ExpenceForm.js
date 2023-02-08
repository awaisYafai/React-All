import React from "react";

import "./ExpenceForm.css";

const ExpenceForm = () => {
  return (
    <form>
      <div className="new-expence__controls">
        <div className="new-expence__control">
          <label>Title</label>
          <input type="text" />
        </div>
      </div>
      <div className="new-expence__controls">
        <div className="new-expence__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-expence__controls">
        <div className="new-expence__control">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>
      <div className="new-expence__action">
        <button type="submit">Add Expence</button>
      </div>
    </form>
  );
};

export default ExpenceForm;
