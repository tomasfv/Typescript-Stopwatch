function calculateTimer(timeInCentiseconds: number): Array<number | string> {
  let hours: number = Math.floor(timeInCentiseconds / 360000);
  let minutes: number = Math.floor((timeInCentiseconds % 360000) / 6000);
  let seconds: number = Math.floor((timeInCentiseconds % 6000) / 100);
  let centiseconds: number = timeInCentiseconds % 100;

  let hoursFormat = hours < 10 ? `0${hours}` : hours;
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
  let centisecondsFormat = centiseconds < 10 ? `0${centiseconds}` : centiseconds;

  return [hoursFormat, minutesFormat, secondsFormat, centisecondsFormat];
}

export default calculateTimer;
