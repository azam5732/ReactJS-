import react from "react";
import './Chart.css'
import ChartBar from "./ChartBar";
const Chart=(props)=>{
    const arrayyy=props.datapoint.map(data=>data.value);
    const maxheight=Math.max(...arrayyy);
    console.log(maxheight);
    return <div className="chart">
        {props.datapoint.map(data=>(<ChartBar key={data.label} value={data.value} maxvalue={maxheight} label={data.label} />))}
    </div>

}
export default Chart;