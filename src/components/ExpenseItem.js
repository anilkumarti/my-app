import './ExpenseItem.css';


function ExpenseItem(props) {

  // const expenseDate=
  // const expenseTitle='Dine and Wine';
  // const expenseAmount=200;
  // const LocationOfExpenditure="Shimla";
  return (
    <div className='expense-item'>
        
      <div> {props.date.toLocaleDateString()}</div>
      <div className='expense-item__description'>
        <h2>{props.tittle}</h2>
        <div className='expense-item__price'>Rs {props.amount}</div>
        <div  className='expense-item__price'>{props.location}</div>
      </div>   
    </div>
  );
}
export default ExpenseItem;
