import React from 'react';
import "./ExpenseItem.css";

const ExpenseDetails=(props)=> {
  return (

    <div  className="expense-item__description"> 
        <h2 >{props.title}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
      <div className="expense-item__price">{props.location}</div>
    </div>
  );
}
export default ExpenseDetails;
