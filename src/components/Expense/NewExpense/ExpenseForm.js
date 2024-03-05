import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm()
{   
 
  
  const [userInput,setUserInput]=useState({enteredTitle: '', enteredAmount:  '', enteredDate:''});
function titleChangeHandler(event)
{ 
     setUserInput({...userInput,enteredTitle:event.target.value})
}    function amountChangeHandler(event) 
{ 
 setUserInput({...userInput,enteredAmount:event.target.value})
}
 function dateChangeHandler(event) {
  setUserInput({...userInput,enteredDate:event.target.value})
 }
    return(
    <form>
      <div className='new-expense__controls'> 
       <div className='new-expense__control'> 
       <label> Tittle </label>
       <input type="Text"  />
         
       </div>
       <div className='new-expense__control' onChange={titleChangeHandler}> 
       <label> Amount </label>
       <input type="Number" min="0.01" step="0.01" onChange={amountChangeHandler} /> 
       <p> The amount will be{userInput.enteredAmount}</p>
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