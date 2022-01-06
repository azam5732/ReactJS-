import { useState } from "react/cjs/react.development";
import "./ExpensesForm.css"
function ExpenseForm(props)
{
    const [stitle,setstitle]=useState('');
    const [samount,setsamount]=useState('');
    const [sdate,setsdate]=useState('');
    const titlehandler=(event)=>
    {
       // console.log(event.target.value);
          setstitle(event.target.value);
          console.log(stitle);
    }
    const amounthandler=(event)=>
    {
        setsamount(event.target.value);
    }
    const datehandler=(event)=>
    {
        setsdate(event.target.value);
    }
    const submithandler=(event)=>{
        event.preventDefault();
        const NewDataa={
           key:stitle,title:stitle,amount:samount,date:new Date(sdate)
        };
       console.log(NewDataa);
       props.passingfuntion(NewDataa);
        setsdate('');
        setstitle('');
        setsamount('');

    }
    return (
        <form onSubmit={submithandler}>
           <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input type='text' value={stitle} onChange={titlehandler}/>
               </div>
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input type='number' min="0.0" step="0.01" value={samount} onChange={amounthandler}/>
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input type='date' min="2019-01-01" max="2028-01-01" value={sdate} onChange={datehandler}/>
               </div>
               <div className="new-expense__actions">
               <button type='button' onClick={props.onCancel}>Cancel</button>
                   <button type='submit'>Add it</button>
               </div>
               

               

           </div>
        </form>

    );
}
export default ExpenseForm;