import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
//import Card from "./Card";
import ExpenseFilter from "./ExpenseFIlter";

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2024');
  const filterChangeHandler=(selectedYear)=>
  {
    setFilteredYear(selectedYear)
  } 
  const filteredExpneses= props.expenses && props.expenses.filter(item=> 
    { return item.date.getFullYear().toString()===filteredYear});

    let expensesContent=<p>Only single Expense here. Please add more..</p>;
    if(expensesContent.length>0)
    {
 expensesContent=filteredExpneses.map((element) => (
          <ExpenseItem
          key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
            location={element.location}
          ></ExpenseItem>
        ))
    }
  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      
        { 
           expensesContent
         }
      
      
    </div>
  );
}
export default Expenses;
