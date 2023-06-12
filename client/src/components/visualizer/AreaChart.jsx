import { useState ,useEffect} from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
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
  const [responseData, setResponseData] = useState([]);

 
  const [sector, setSector] = useState('Energy');
  const [topic, setTopic] = useState('oil');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/sector-topic?sector=${sector}&topic=${topic}`
        );
        const data = response.data;
       console.log(data);
       setResponseData(data)
      } catch (error) {
        
        console.log(error);
      }
    };
    fetchData();
  }, [sector, topic]);
 
  const data ={
    labels: responseData?.map((item) => item.end_year),
    datasets: [
      {
        label: " intensity",
        data: responseData?.map((item) => item.intensity),
        backgroundColor: "yellow",
        borderColor: "green",
        tension: 0.4,
     
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "relevance",
        data: responseData?.map((item) => item.relevance),
        borderColor: "green",
        tension: 0.4,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
      {
        label: "likelihood",
        data: responseData?.map((item) => item.likelihood),
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.4,
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  };
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
      <SelecComponent
            setsector={setTopic}
            label={"Select Topic"}
            sector={topic}
            apiValue={"topic"}
            
          />
          <SelecComponent
            setsector={setSector}
            label={"Select Sector"}
            sector={sector}
            apiValue={"sector"}
            
          />
        </div>
    </header>
    <Line data={data} options={{ responsive: true }} />
  </Card>
  );
}

export default AreaChart;
