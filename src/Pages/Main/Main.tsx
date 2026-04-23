import React from "react";
import StopwatchDisplay from "../../Components/Stopwatch-Display/Stopwatch-Display";
import Counter from "../../Components/Counter/Counter";
import EmojisCarousel from "../../Components/Emojis-Carousel/EmojisCarousel";
import "./main.css";

const Main: React.FC = () => {

  return (
    <div className="main-container">
      <div className="div1">
        <StopwatchDisplay />
      </div>
      <div className="div2">
        <Counter />
      </div>
      <div className="div3">
        <EmojisCarousel />
      </div>
      <div className="div4">
        <StopwatchDisplay />
      </div>
      <div className="div5">
        <Counter />
      </div>
      <div className="div6">
        <EmojisCarousel />
      </div>
      <div className="div7">
        <StopwatchDisplay />
      </div>
      <div className="div8">
        <Counter />
      </div>
      <div className="div9">
        <EmojisCarousel />
      </div>
    </div>
  );
}

export default Main;
