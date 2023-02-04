import React from "react";
import "./ExpenceItem.css";

function ExpenceItems(props) {
    const month = props.date.toLocaleString('en-US',{month: 'long'})
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US',{day: '2-digit'})
  // console.log(props.date);
  return (
    <div className="expence-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

      <div className="expence-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenceItems;
