import React from 'react';
import "./Expenses.css";
import ExpenseItem  from "./ExpenseItem";
import Card from "./Card"
 
function Expenses(props)
{
    
return (<Card className="expenses">
  { 
      props.expenses &&  props.expenses.map((element) => (
          <ExpenseItem  tittle={element.tittle} amount={element.amount} date={element.date}
          location={element.location}></ExpenseItem>
        
        ))}
</Card>)

}
export default  Expenses;