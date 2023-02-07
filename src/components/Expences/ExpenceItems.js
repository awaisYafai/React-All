import React, { useState } from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
const ExpenceItems =(props)=> {
  // console.log(props.date);

  const clickHandler = ()=>{
  }
  return (
    <Card className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item__description">
        <h2>{}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenceItems;
