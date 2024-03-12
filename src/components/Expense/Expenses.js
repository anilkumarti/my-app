import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
//import Card from "./Card";
import ExpenseFilter from "./ExpenseFIlter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2024");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpneses =
    props.expenses &&
    props.expenses.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
    });

 
  return (
      <li>
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpneses} />
      <ExpensesList items={filteredExpneses}/>
     
    </div>
    </li> 
    
  );
}
export default Expenses;
