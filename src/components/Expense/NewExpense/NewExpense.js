import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>
{  
    const [isEditing,setIsEditing]=useState(false);
     const startEditingHandler=()=> {
          setIsEditing(true)
     }
     const stopEditingHandler=()=> {
        setIsEditing(false)
     }
    function saveExpenseDataHandler(enteredExpenseData)
    { const expenseData= {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
      props.onAddExpense(expenseData)
    }
    return ( <div> {!isEditing && (<button onClick={startEditingHandler} >Add New Expense</button> )}
  {  isEditing && (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
    </div>
    ) }
     </div>
)
    }

export default NewExpense;