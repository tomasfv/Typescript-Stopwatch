import React, { useState, useEffect } from "react";
import calculateTimer from "../../Helper/CalculateTimer";
import Controls from "../Controls/Controls";
import "./main.css";

const Main: React.FC = () => {
  const [timeInCentiseconds, setTimeInCentiseconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInCentiseconds);
    setTimerArray(timeArray);
  }, [timeInCentiseconds]);

  return (
    <main>
      <section className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[3]}</p>
      </section>
      <Controls setTimeInCentiseconds={setTimeInCentiseconds} />
    </main>
  );
}

export default Main;
