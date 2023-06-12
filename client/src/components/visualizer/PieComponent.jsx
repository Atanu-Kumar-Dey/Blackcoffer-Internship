import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie, PolarArea } from "react-chartjs-2";
import { Card } from "@material-tailwind/react";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "yellow"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"],
};
function PieComponent() {
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
    labels: ["Red", "Yellow", "Blue"],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("resss", res);
          const label = [];
          const data = [];
          for (var i of res) {
            label.push(i.name);
            data.push(i.id);
          }
          setData({
            datasets: [
              {
                data: data,
                backgroundColor: ["red", "blue", "yellow"],
              },
            ],
            labels: label,
          });
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);
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
      </header>
      <PolarArea data={data} options={{ responsive: true }} />
    </Card>
  );
}

export default PieComponent;
