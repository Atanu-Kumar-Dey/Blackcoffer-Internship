import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@material-tailwind/react";
import SelecComponent from "../SelecComponent";
import {
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Chart as ChartJS,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarComponent = () => {
  const [responseData, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/sector-endYear?sector=Energy&end_year=2018"
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const data = {
    labels: responseData?.map((item) => item.topic),
    datasets: [
      {
        label: "intensity",
        data: responseData?.map((item) => item.intensity),
        backgroundColor: "cyan",
        borderolor: "black",
        borderWidth: 1,
      },
      {
        label: "relevance",
        data: responseData?.map((item) => item.relevance),
        backgroundColor: "red",
        borderolor: "black",
        borderWidth: 1,
      },
      {
        label: "likelihood",
        data: responseData?.map((item) => item.likelihood),
        backgroundColor: "yellow",
        borderolor: "black",
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card className="p-4 bg-white border-gray-500 border rounded-md ">
      <header className="p-2 flex justify-between">
        <div>
          <span className="text-[16px] text-[#2F2B3DC7] font-semibold">
            Topics Insights
          </span>
          <p className="text-[14px] ">
            Topic data according to end year and sector
          </p>
        </div>
        <SelecComponent/>
      </header>
      <Bar data={data} options={{ responsive: true }} />
    </Card>
  );
};

export default BarComponent;
