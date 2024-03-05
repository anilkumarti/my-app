import "./ExpenseDate.css"

const ExpenseDate=(props)=> {
    const day=props.date.toLocaleDateString('en-US', {day:"2-digit"});
    const Month=props.date.toLocaleDateString('en-US', {month: "long"});
    const Year=props.date.getFullYear();
    return ( 
        
       <div className='expense-date'>
      <div className='expense-date__month'>{Month}</div>
      <div className='expense-date__year'>{Year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
    );
}


export default ExpenseDate;