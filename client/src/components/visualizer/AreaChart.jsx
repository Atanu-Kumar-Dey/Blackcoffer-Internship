import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,

} from "chart.js";
ChartJS.register(

  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
);

import { Card } from "@material-tailwind/react";
import SelecComponent from "../SelecComponent";
function AreaChart() {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "yellow",
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "intensity",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
       
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "relevance",
        data: [101, 201, 301, 142, 151, 182, 131, 159, 161, 173, 191, 158],
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  return (
    <Card className="p-4 bg-white border-gray-500 border rounded-md m-4">
    <header className="p-2 flex justify-between">
      <div>
        <span className="text-[16px] text-[#2F2B3DC7] font-semibold">
          Yearly Data
        </span>
        <p className="text-[14px] ">
          Data of every end year according to sector and topic
        </p>
      </div>
      <div className="flex gap-2">
          <SelecComponent />
          <SelecComponent />
        </div>
    </header>
    <Line data={data} options={{ responsive: true }} />
  </Card>
  );
}

export default AreaChart;
