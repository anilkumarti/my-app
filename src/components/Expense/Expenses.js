import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
//import Card from "./Card";
import ExpenseFilter from "./ExpenseFIlter";

function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2017');
  const filterChangeHandler=(selectedYear)=>
  {
    setFilteredYear(selectedYear)
  }
  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {props.expenses &&
        props.expenses.map((element) => (
          <ExpenseItem
          key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
            location={element.location}
          ></ExpenseItem>
        ))}
    </div>
  );
}
export default Expenses;
