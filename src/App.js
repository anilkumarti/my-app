import {useState} from 'react';
//import ExpenseItem  from "./components/Expenses/ExpenseItem";
import Card from './components/Expense/Card'
//import ExpenseForm from './components/Expense/NewExpense/ExpenseForm';
import Expenses from "./components/Expense/Expenses";
import NewExpense from './components/Expense/NewExpense/NewExpense';

const App=()=> 
 { 
    const [expenses,setExpenses]=useState([ {title: "Gym", amount: 235, date:new Date(2011,11,28),location: "Rampur" },
{title: "Wine and Dine", amount: 235, date:new Date(2011,11,28),location: "Jodhpur" },
{title: "Fees", amount: 235, date:new Date(2011,11,28),location: "Honeypur" },
{title: "Other taxes", amount: 235, date:new Date(2011,11,28),location: "Bhilpur" }

]);
 

 const addExpenseHandle=expense=> {
  console.log("in App Js");
  console.log(expense);
   setExpenses((prevExpenses)=> {
    return [expense,...prevExpenses]
   })
 }

  return (
    <Card>
       <h1> Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandle}/>
      <Expenses expenses={expenses}/>
     
     
      
    </Card>
    
  );

}
export default App;