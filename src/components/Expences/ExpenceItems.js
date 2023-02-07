import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
const ExpenceItems =(props)=> {
  // console.log(props.date);
  return (
    <Card className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenceItems;
