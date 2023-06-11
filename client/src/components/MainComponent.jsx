import React from "react";
import Header from "./Header";
import StatisticsCard from "./StatisticalCard/StatisticsCard";

const MainComponent = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex mt-6 justify-between">
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
      </div>
    </div>
  );
};

export default MainComponent;
