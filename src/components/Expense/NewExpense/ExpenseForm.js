import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props)
{   
    
  
  // const [userInput,setUserInput]=useState({enteredTitle: '', enteredAmount:  '', enteredDate:''});
   const [enteredTitle,setEnteredTitle]=useState('');
   const [enteredAmount,setEnteredAmount]=useState('');
   const [enteredDate,setEnteredDate]=useState('')
   const [enteredLocation,setEnteredLocation]=useState('')
function titleChangeHandler(event)
{    setEnteredTitle(event.target.value)
    //  setUserInput((prevState)=> { 
    //    return({...userInput,enteredTitle:event.target.value})
    //  });
}   
 function amountChangeHandler(event) 
{   setEnteredAmount(event.target.value)
//  setUserInput((prevState)=> {
//   return ({...userInput,enteredAmount:event.target.value});
//  })
}
 function dateChangeHandler(event) {
  setEnteredDate(event.target.value)
  // setUserInput((prevState)=> {
  //   return ({...userInput,enteredDate:event.target.value})
  // })
 }  
 function locationChangeHandler(event)
 {
  setEnteredLocation(event.target.value)
 }
 function handleSubmit(e)
 { e.preventDefault()
 const expData= {
  title:enteredTitle,
  amount:enteredAmount,
  date:new Date(enteredDate),
  location: enteredLocation
 } 
 props.onSaveExpenseData(expData);
 
  setEnteredTitle('');
  setEnteredDate('');
  setEnteredAmount('')
  setEnteredLocation('')
 }

    return(
    <form  onSubmit={handleSubmit}>
      <div className='new-expense__controls'> 
       <div className='new-expense__control'> 
       <label> Tittle </label>
       <input type="Text" value={enteredTitle} onChange={titleChangeHandler} />
         
       </div>
       <div className='new-expense__control' > 
       <label> Amount </label>
       <input type="Number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} /> 
  
       </div>
       <div className='new-expense__control'> 
       <label> Date</label>
       <input type="Date" min="2019-12-01" max="2024-03-06" value={enteredDate} onChange={dateChangeHandler}/> 
       </div>
       <div className='new-expense__control'> 
         <label> Location</label>
         <input type="text" value={enteredLocation} onChange={locationChangeHandler}/>
       </div>
       
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
    );

}
export default ExpenseForm;