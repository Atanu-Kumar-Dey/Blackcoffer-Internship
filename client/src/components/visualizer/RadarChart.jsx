import { useState,useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
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
  const [responseData, setResponseData] = useState([]);

 
  const [sector, setSector] = useState('Energy');
  const [end_year, setEnd_year] = useState("2018");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(
          `http://localhost:4000/api/sector-endYear?sector=${sector}&end_year=${end_year}`
        );
      
      console.log(data);
      setResponseData(data)

      } catch (error) {
      
        console.log(error);
      }
    };
    fetchData();
  }, [sector, end_year]);
  
  const data = {
    labels: responseData?.map((item) => item.topic),
    datasets: [
      {
        label: "intensity",
        data: responseData?.map((item) => item.intensity),
        backgroundColor: "hsl(203, 79%, 66%)",
        backgroundColor: "cyan",
        borderolor: "black",
      
        borderWidth: 1,
      },
      {
        label: "relevance",
        data:responseData?.map((item) => item.relevance),
        backgroundColor: "red",
      
        borderolor: "black",
        borderWidth: 1,
      },
      {
        label: "likelihood",
        backgroundColor: "yellow",
      
        data: responseData?.map((item) => item.likelihood),
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
        <div className="">
        <div className="w-1 my-2"><SelecComponent 
            setsector={setSector}
            label={"Select Sector"}
            sector={sector}
            apiValue={"sector"}
          /></div>
         <div className="my-4">
         <SelecComponent
            setsector={setEnd_year}
            label={"Select End Year"}
            sector={end_year}
            apiValue={"end_Year"}
            
          />
         </div>
        </div>
      </header>
      <Radar data={data} options={{}} />
    </Card>
  );
}

export default RadarChart;
