import React from "react";
const ExpenseFilter=(props)=> {
  const dropDownChangeHandler=(event)=> {
    props.onChangeFilter(event.target.value)
  }
    return (
  <div className="expenses-filter">
    <div className="expenses-filter__control">
  <label> Filter by Year </label>
  <select value={props.selected} onChange={dropDownChangeHandler}> 
<option value="2018">2018</option>
   <option value="2019">2019</option>
   <option value="2020">2020</option>
   <option value="2021">2021</option>
  </select>
     </div>
  </div>
)
}

export default ExpenseFilter;