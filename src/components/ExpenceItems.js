import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";

function ExpenceItems(props) {
  // console.log(props.date);
  return (
    <div className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenceItems;
