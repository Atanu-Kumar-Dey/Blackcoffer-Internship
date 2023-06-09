import React, { useEffect, useState } from "react";
import axios from "axios";

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
          "http://localhost:4000/api/data/2018/Energy"
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
      }
    ],
  };
  return (
    <div >
      <Bar data={data} options={{ responsive: true }} />
    </div>
  );
};

export default BarComponent;
