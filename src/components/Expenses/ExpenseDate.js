function ExpenseDate(props) {
    const day=props.date.toLocaleDateString('en-US', {day:"2-digit"});
    const Month=props.date.toLocaleDateString('en-US', {month: "long"});
    const Year=props.date.getFullYear();
    return ( 
        <div> 
        <div>{day}</div>
        <div>{Month}</div>
        <div>{Year}</div>
       </div>
       
    );
}


export default ExpenseDate;