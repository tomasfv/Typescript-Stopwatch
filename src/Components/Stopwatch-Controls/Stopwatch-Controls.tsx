import React, { useState } from "react";
import "./stopwatch-controls.css";

type Props = {
  setTimeInCentiseconds: React.Dispatch<React.SetStateAction<number>>;
};

const StopwatchControls: React.FC<Props> = (props: Props) => {
  const { setTimeInCentiseconds } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  const [playButton, setPlayButton] = useState<boolean>(false);

  const handlePlayButton = () => {
    const interval = window.setInterval(() => {
      setTimeInCentiseconds((previousState: number) => previousState + 1);
    }, 10);

    setIntervalId(interval);
    setPlayButton(true);
  };

  const handleStopButton = () => {
    window.clearInterval(intervalId);
    setPlayButton(false);
  };
  const handleResetButton = () => {
    window.clearInterval(intervalId);
    setTimeInCentiseconds(0);
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

export default StopwatchControls;
