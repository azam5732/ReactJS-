import { useState } from "react";
import ExpenseForm from "./ExpensesForm"
import "./NewExpenses.css"
function NewExpenses(props)
{
    const fun=(parameter)=>
    {
         const NewData={
             ...parameter,
             //id:'111',

         };
         props.passingfun(NewData);
       // console.log(NewData);

    }
    const [startedit,setstartedit]=useState(false)
    const startediting=()=>{
             setstartedit(true);
    }
    const endediting=()=>{
        setstartedit(false);
    }
    return (
        <div className='new-expense'>
            
            {!startedit&&<button onClick={startediting}>Add New Expense</button>}
            {startedit&&<ExpenseForm passingfuntion={fun} onCancel={endediting}/>}

        </div>

    );
}
export default NewExpenses;