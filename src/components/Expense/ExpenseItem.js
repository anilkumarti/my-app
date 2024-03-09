import React  from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
//import Card from "./Card.js";

const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated");
  //   console.log("Clicked");
  // }; 
  // const[amount,setAmount]=useState(props.amount);
  //  const clickExpense=()=> {
  //    setAmount("$100")  
  //  }
  return (
    <div className="expense-item">
      

      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <ExpenseDetails
          amount={props.amount}
          location={props.location}
          title={props.title}
        />
      </div>
      {/* <button  onClick={clickHandler}>Change Title</button>
      <button onClick={clickExpense}>Change Amount</button>
       */}
    
    </div>
  );
};
export default ExpenseItem;
