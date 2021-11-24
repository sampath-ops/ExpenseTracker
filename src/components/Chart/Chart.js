import ChartBar from './ChartBar';
import './Chart.css';
import './ChartBar.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return ( 
        <div className="chart">
            {props.dataPoints.map((datapoint)=>(
                <ChartBar key={datapoint.label} value={datapoint.value} label={datapoint.label} maxValue={totalMaximum}/>
            ))}
        </div>
     );
}
 
export default Chart;