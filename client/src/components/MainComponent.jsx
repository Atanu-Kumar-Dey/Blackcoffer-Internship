import React from "react";
import Header from "./Header";
import StatisticsCard from "./StatisticalCard/StatisticsCard";
import BarComponent from "./visualizer/BarComponent";
import AreaChart from "./visualizer/AreaChart";
import RadarChart from "./visualizer/RadarChart";

const MainComponent = () => {
  return (
    <div className="w-full">
      <Header />
      <BarComponent />
      <div className="flex gap-4">
        <RadarChart/>
        <RadarChart/>
      </div>
      <AreaChart />
    </div>
  );
};

export default MainComponent;
