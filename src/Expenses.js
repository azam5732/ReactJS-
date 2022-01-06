import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./chart/ExpenseChart";

function Expenses(props)
{
    const [enteredfilterr,setfilter]=useState('2020')
    const fun=(param)=>{
       console.log(param);
      setfilter(param);

    }
    const filterarray=props.item.filter(expenses=>{

      return expenses.date.getFullYear().toString()===enteredfilterr;
    });
    return( 
     
      <div>
        
       <Card className="expenses">

       <ExpensesFilter   upfunction={fun}/>
       <ExpenseChart expenses={filterarray}/>
         <ExpensesList item={filterarray}/>
       </Card>
       </div>
       
    );
}
export default Expenses