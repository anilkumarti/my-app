import React from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
 import Card from "./Card.js";

const ExpenseItem=(props)=> {
  return (
    <Card className="expense-item">
          <ExpenseDate date={props.date} />
            
         
           <div className="expense-item__description">
     
       <ExpenseDetails amount={props.amount} location={props.location} tittle={props.tittle} />
       </div>
    
    </Card>
  );
}
export default ExpenseItem;
