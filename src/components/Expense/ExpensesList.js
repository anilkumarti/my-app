import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {


  if (props.items && props.items.length === 0) {
    return <h2 className="expense-list__fallback"> No expenses found</h2>;
  }

  return (
    <ul className="expense-list"> {
        props.items && props.items.map((element)=> (
      <ExpenseItem
        key={element.id}
        title={element.title}
        amount={element.amount}
        date={element.date}
        location={element.location}
      ></ExpenseItem>
      ))
}
    </ul>
  )
};

export default ExpensesList;
