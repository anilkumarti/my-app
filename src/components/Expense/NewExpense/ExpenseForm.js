import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm()
{   
    
  
  const [userInput,setUserInput]=useState({enteredTitle: '', enteredAmount:  '', enteredDate:''});
function titleChangeHandler(event)
{  
     setUserInput((prevState)=> { 
       return({...userInput,enteredTitle:event.target.value})
     });
}   
 function amountChangeHandler(event) 
{ 
 setUserInput((prevState)=> {
  return ({...userInput,enteredAmount:event.target.value});
 })
}
 function dateChangeHandler(event) {
  setUserInput((prevState)=> {
    return ({...userInput,enteredDate:event.target.value})
  })
 }  
 function handleSubmit(e)
 { e.preventDefault()
 const expData= {
  title:userInput.enteredTitle,
  amount:userInput.enteredAmount,
  date: userInput.enteredDate
 } ;
 console.log(expData)

 }

    return(
    <form  onSubmit={handleSubmit}>
      <div className='new-expense__controls'> 
       <div className='new-expense__control'> 
       <label> Tittle </label>
       <input type="Text"  onChange={titleChangeHandler} />
         
       </div>
       <div className='new-expense__control' > 
       <label> Amount </label>
       <input type="Number" min="0.01" step="0.01" onChange={amountChangeHandler} /> 
  
       </div>
       <div className='new-expense__control'> 
       <label> Date</label>
       <input type="Date" min="2019-12-01" max="2024-03-06" onChange={dateChangeHandler}/> 
       </div>
       
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
    );

}
export default ExpenseForm;