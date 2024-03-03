import React from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
 //import Card from "./Card.js";

const ExpenseItem=(props)=> {
  const clickHandler=()=>
  {
     const expense_item=document.querySelector('.expense-item');
      expense_item.remove();
  }
  return (
    <div className="expense-item">
          <ExpenseDate date={props.date} />
            
         
           <div className="expense-item__description">
     
       <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
       </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  )
}
export default ExpenseItem;
