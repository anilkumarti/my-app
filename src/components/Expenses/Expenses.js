import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
//import Card from "./Card";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses &&
        props.expenses.map((element) => (
          <ExpenseItem
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
