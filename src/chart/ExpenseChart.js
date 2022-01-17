import Chart from "./Chart";
const ExpenseChart=(props)=>{
      const chartvalue=[
      {label : 'jan', value : 0},
      {label : 'feb', value : 0},
      {label : 'mar', value : 0},
      {label : 'apr', value : 0},
      {label : 'may', value : 0},//parant prop hai ye 
      {label : 'jun', value : 0},
      {label : 'jul', value : 0},
      {label : 'aug', value : 0},
      {label : 'sep', value : 0},
      {label : 'oct', value : 0},
      {label : 'nov', value : 0},
      {label : 'dec', value : 0},]
      //console.log(props.expenses.amount);
      for (const expense of props.expenses)
      {
        const index=expense.date.getMonth();
        
        chartvalue[index].value+=parseFloat(expense.amount);
        //console.log( chartvalue[index].value);
        
      }
      

    return <Chart datapoint={chartvalue}/>
}
export default ExpenseChart;