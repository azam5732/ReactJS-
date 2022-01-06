
import Expenses from "./Expenses";
import React,{useState} from "react";
import react from "react";
import NewExpenses from "./NewExpenses";
const dummy_expenses = [
  {
    key:"TV",
    title: "TV",
    amount: 185,
    date: new Date(2020, 7, 14),
  },
  {  
    title: "Mobile", amount: 799.49, date: new Date(2021, 2, 12),
    key:"Mobile"
   },
  {
    title: "Laptop",
    amount: 2000,
    date: new Date(2021, 2, 28),
    key:"Laptop"
  },
  {
   
    title: "AC",
    amount: 700,
    date: new Date(2021, 5, 12),
    key:"AC"
  },
];

function App() {
    const [expenses,setExpenses]= useState(dummy_expenses);
  const fun=(parameteer)=>{

    console.log(parameteer);
    setExpenses(x=>{
      return [parameteer,...x];
    });

  }
  return (
    <div>
    <NewExpenses passingfun={fun}/>  
    
    <Expenses item={expenses}/>
    </div>
    

  );

}

export default App;
