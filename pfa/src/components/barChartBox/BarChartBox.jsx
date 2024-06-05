import { XAxis,YAxis,Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <XAxis dataKey="name" angle={-45} textAnchor="end" tick={(props) => (
    <text
      x={props.x}
      y={props.y}
      dy={16}
      fontSize={10}
      fill="#ffffff"
      fontWeight="bold"
      textAnchor="end"
      transform={`rotate(-10 ${props.x},${props.y})`}
    >
      {props.payload.value}
    </text>
  )}/>
  <YAxis dataKey={props.dataKey} />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
