import React from "react";
import Header from "./Header";
import StatisticsCard from "./StatisticalCard/StatisticsCard";
import BarComponent from "./visualizer/BarComponent";

const MainComponent = () => {
  return (
    <div className="w-full">
      <Header />
      <BarComponent/>
    </div>
  );
};

export default MainComponent;
