import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  LineElement,
  Legend,
  PointElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
ChartJS.register(
  Tooltip,
  LineElement,
  Legend,
  RadialLinearScale,
  PointElement,
  Filler
);
import { Radar } from "react-chartjs-2";
import { Card } from "@material-tailwind/react";
import SelecComponent from "../SelecComponent";

function RadarChart() {
  const data = {
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
        label: "intensity",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        backgroundColor: "cyan",
        backgroundColor: "cyan",
        borderolor: "black",
        borderWidth: 1,
      },
      {
        label: "relevance",
        data: [101, 201, 301, 142, 151, 182, 131, 159, 161, 173, 191, 158],

        borderolor: "black",
        borderWidth: 1,
      },
      {
        label: "likelihood",
        data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
        borderolor: "black",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card className="p-4 bg-white border-gray-500 border rounded-md m-4 w-1/2">
      <header className="p-2 flex justify-between  mb-2">
        <div>
          <span className="text-[12px] text-[#2F2B3DC7] font-semibold">
            Yearly Data
          </span>
          <p className="text-[10px]">
            Data of every end year according to sector and topic
          </p>
        </div>
        <div>
          <SelecComponent />
          <SelecComponent />
        </div>
      </header>
      <Radar data={data} options={{}} />
    </Card>
  );
}

export default RadarChart;
