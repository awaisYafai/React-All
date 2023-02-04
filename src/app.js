import ExpenceItem from "./components/ExpenceItems";

function App() {
  let expenseDate = new Date(2023, 1, 2);
  let expenseTitle = "School Fee";
  let expenseAmount = 300;
  return (
    <div>
      <h2>Lets Get Started</h2>
      <ExpenceItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}
      ></ExpenceItem>
    </div>
  );
}

export default App;
