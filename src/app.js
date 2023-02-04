import ExpenceItems from "./components/ExpenceItems";

function App() {
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
      <h2>Lets Get Started</h2>
      <ExpenceItems
        date={expence[0].date}
        title={expence[0].title}
        amount={expence[0].amount}
      ></ExpenceItems>
      <ExpenceItems
                date={expence[1].date}
                title={expence[1].title}
                amount={expence[1].amount}
      ></ExpenceItems>
      <ExpenceItems
                date={expence[2].date}
                title={expence[2].title}
                amount={expence[2].amount}
      ></ExpenceItems>
      <ExpenceItems
               date={expence[3].date}
               title={expence[3].title}
               amount={expence[3].amount}
      ></ExpenceItems>
    </div>
  );
}

export default App;
