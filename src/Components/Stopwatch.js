import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  //useEffect to keep track of background timer. re-render triggered on 'running' state change. Change running state whenever start/stop are pressed. And Reset to reset interval to 0 whether running or not.
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    //not sure why this line is needed, seems like every time the useEffect renders, interval gets reset. setting interval to 0 stops the timer.
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopWatch">
      <div className="numbers">
        <span>{"0" + Math.floor((time / 60000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span>{"0" + ((time / 10) % 100)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};
export default Stopwatch;
