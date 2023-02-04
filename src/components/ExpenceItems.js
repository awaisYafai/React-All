import "./ExpenceItem.css";

function ExpenceItem(){
    let title = 'Car Insurence'
return(
    <div className="expense-item">
        <div className="date">Feb 1st 2023</div>
        
        <div className="expense-item__description">
            <h2>{title}</h2>
        </div>
        <div className="expense-item__price">$200</div>
    </div>
)


}

export default ExpenceItem;