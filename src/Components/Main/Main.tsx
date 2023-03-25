import React, { useState, useEffect } from "react";
import calculateTimer from "../../Helper/CalculateTimer";
import Controls from "../Controls/Controls";
import "./Main.css";

function Main() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0); //defino el tipo
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <main>
      <section className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
}

export default Main;
