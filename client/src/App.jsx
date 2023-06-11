import React from "react";
import MainComponent from "./components/MainComponent";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="flex  gap-4">
      <div className=""><NavBar/></div>
      <div className="h-[100vh] flex-wrap overflow-y-auto p-4 w-full"><MainComponent/></div>
      
    </div>
  );
};

export default App;
