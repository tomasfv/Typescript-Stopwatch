import React, { useState, useEffect } from "react";
import calculateTimer from "../../Helpers/CalculateTimer";
import StopwatchControls from "../Stopwatch-Controls/Stopwatch-Controls";
import "./stopwatch-display.css";

const StopwatchDisplay: React.FC = () => {
  const [timeInCentiseconds, setTimeInCentiseconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInCentiseconds);
    setTimerArray(timeArray);
  }, [timeInCentiseconds]);

  return (
    <div className="display-container">
      <section className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[3]}</p>
      </section>
      <StopwatchControls setTimeInCentiseconds={setTimeInCentiseconds} />
    </div>
  );
}

export default StopwatchDisplay;
