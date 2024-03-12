import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues=props.dataPoints.map(dataPoint=> dataPoint.value);
  const totalMaxium=Math.max(...dataPointValues)
  console.log("this is total maximum fom chart",totalMaxium)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))} 
    </div>
  );
};
export default Chart;
