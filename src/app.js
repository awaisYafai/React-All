import React from "react";
import Expences from "./components/Expences/Expences";
import NewExpence from "./components/NewExpences/NewExpence";

const App = () => {
  let expence = [
    {
      id: "e1",
      title: "school fee",
      amount: 300,
      date: new Date(2023, 5, 2),
    },
    {
      id: "e2",
      title: "college fee",
      amount: 500,
      date: new Date(2023, 5, 2),
    },
    {
      id: "e3",
      title: "tution fee",
      amount: 400,
      date: new Date(2023, 5, 2),
    },
    {
      id: "e4",
      title: "bus fee",
      amount: 200,
      date: new Date(2023, 5, 2),
    },
  ];
  return (
    <div>
      <NewExpence />
      <Expences item={expence} />
    </div>
  );
};

export default App;
