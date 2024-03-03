//import React from 'react';
//import ExpenseItem  from "./components/Expenses/ExpenseItem";
import Card from "./components/Expenses/Card";

import Expenses from "./components/Expenses/Expenses";

const App=()=> 
{    const expenses=[ {title: "Gym", amount: 235, date:new Date(2011,11,28),location: "Rampur" },
{title: "Wine and Dine", amount: 235, date:new Date(2011,11,28),location: "Jodhpur" },
{title: "Fees", amount: 235, date:new Date(2011,11,28),location: "Honeypur" },
{title: "Other taxes", amount: 235, date:new Date(2011,11,28),location: "Bhilpur" }

];
  return (
    <Card>
       <h1> Expense Tracker</h1>
      <Expenses expenses={expenses}/>
     
  
     
    </Card>
  );

}
export default App;