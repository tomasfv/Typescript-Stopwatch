import React, { useState } from "react";
import "./Controls.css";

type Props = {
  setTimeInSeconds: Function;
};

function Controls(props: Props) {
  const { setTimeInSeconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  const [playButton, setPlayButton] = useState<boolean>(false);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 1000);

    setIntervalId(interval);
    setPlayButton(true);
  };

  const handleStopButton = () => {
    clearInterval(intervalId);
    setPlayButton(false);
  };
  const handleResetButton = () => {
    clearInterval(intervalId);
    setTimeInSeconds(0);
    setPlayButton(false);
  };

  return (
    <section className="controls-container">
      {!playButton ? (
        <button onClick={handlePlayButton}>START</button>
      ) : (
        <button>START</button>
      )}
      <button onClick={handleStopButton}>STOP</button>
      <button onClick={handleResetButton}>RESET</button>
    </section>
  );
}

export default Controls;
