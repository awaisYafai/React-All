import './Expence.css'
import ExpenceItems from "./ExpenceItems";


function Expences(props) {
  return (
    <div className='expence'>
      <ExpenceItems
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />
      <ExpenceItems
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
      <ExpenceItems
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      />
      <ExpenceItems
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
      />
    </div>
  );
}

export default Expences;
