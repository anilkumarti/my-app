import { useState } from "react";

function ExpenseForm()
{ const [inputValue,setInput]=useState('');
function handleChange(event)
{
    setInput(event.target.value)
}
    return(
    <div>
  <form>   <input type="text" value={inputValue} onChange={handleChange}/>
    <p> The value will be : {inputValue}</p>
    <input type="text" placeholder="Enter Amount"/>
    <input type="text" placeholder="Enter Date"/>
       <button> Submit</button></form>
    </div>
    );

}
export default ExpenseForm;