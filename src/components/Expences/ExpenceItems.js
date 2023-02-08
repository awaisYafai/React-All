import React, { useState } from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
const ExpenceItems = (props) =>{
// const ExpenceItems = (props) => {  // props
//   const [newTitle, setNewTitle] = useState("");
//   const [title, setTitle] = useState(props.title);  // state in react

//   const clickHandler = () => {
//     setTitle(newTitle);
//   };

//   const changeHandler = (event) => { // event handler
//     setNewTitle(event.target.value);
//   };
  return (
    <Card className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expence-item__price">${props.amount}</div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenceItems;
