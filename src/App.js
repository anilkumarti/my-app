
import ExpenseItem  from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
const App=()=> 
{  const expenses=[ {tittle: "Gym", amount: 235, date:new Date(2011,11,28),location: "Rampur" },
{tittle: "Wine and Dine", amount: 235, date:new Date(2011,11,28),location: "Jodhpur" },
{tittle: "Fees", amount: 235, date:new Date(2011,11,28),location: "Honeypur" },
{tittle: "Other taxes", amount: 235, date:new Date(2011,11,28),location: "Bhilpur" }

];
  return (
    <Card>
       <h1> Expense Tracker</h1>
     {
     expenses.map((element) => (
       <ExpenseItem tittle={element.tittle} amount={element.amount} date={element.date}
       location={element.location}></ExpenseItem>
     
     ))}
  
     
    </Card>
  );

}
export default App;