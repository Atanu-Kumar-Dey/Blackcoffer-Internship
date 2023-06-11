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
  const [sector, setSector] = useState('Energy');
  const [end_year, setEnd_year] = useState('2018');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/sector-endYear?sector=${sector}&end_year=${end_year}`
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(sector);

        console.log(error);
      }
    };
    fetchData();
  }, [sector,end_year]);
 
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
    <Card className="p-4 bg-white border-gray-500 border rounded-md m-4">
      <header className="p-2 flex justify-between">
        <div>
          <span className="text-[16px] text-[#2F2B3DC7] font-semibold">
            Topics Insights
          </span>
          <p className="text-[14px] ">
            Topic data according to end year and sector
          </p>
        </div>
        <SelecComponent setsector={setSector} label={"Select Sector"} sector={sector} apiValue={'sector'}/>
        <SelecComponent setsector={setEnd_year} label={"Select End Year"} sector={end_year} apiValue={'end_Year'}/>

      </header>
      <Bar data={data} options={{ responsive: true }} />
    </Card>
  );
};

export default BarComponent;
