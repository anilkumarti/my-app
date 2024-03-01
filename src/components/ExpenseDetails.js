import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div>
         <h2 className="expense-item__description"> {props.tittle}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
      <div className="expense-item__price">{props.location}</div>
    </div>
  );
}
export default ExpenseDetails;
