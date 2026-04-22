import React from "react";
import StopwatchDisplay from "../Stopwatch-Display/Stopwatch-Display";
import "./main.css";

const Main: React.FC = () => {

  return (
    <div className="main-container">
      <div className="div1">
        <StopwatchDisplay />
      </div>
      <div className="div2">
        <StopwatchDisplay />
      </div>
      <div className="div3">
        <StopwatchDisplay />
      </div>
      <div className="div4">
        <StopwatchDisplay />
      </div>
      <div className="div5">
        <StopwatchDisplay />
      </div>
      <div className="div6">
        <StopwatchDisplay />
      </div>
      <div className="div7">
        <StopwatchDisplay />
      </div>
      <div className="div8">
        <StopwatchDisplay />
      </div>
      <div className="div9">
        <StopwatchDisplay />
      </div>
    </div>
  );
}

export default Main;
