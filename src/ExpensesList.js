import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
import react from "react";
const ExpensesList=(props)=>{
         let expensescontent=<p>No Content Found!</p>
         if(props.item.length===0)
         {
             return <h2 className="expenses-list__fallback">No Expense Found!</h2>
         }
         
        return <ul className="expenses-list">
              {props.item.map(x => <ExpenseItem key={x.key} title={x.title} amount={x.amount} date={x.date}/>)}
            
        </ul>

    
}
export default ExpensesList;