import { useState, useEffect } from "react";
import Datepicker from "./components/Datepicker";
import DisplayTimer from "./components/DisplayTimer";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      const endTime = new Date(selectedDate).getTime();
      const now = new Date().getTime();
      let distance = endTime - now;
      interval = setInterval(() => {
        distance = distance - 1000;
        if (distance <= 0) {
          clearInterval(interval);
          setRunning(false);
          setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24)) % 99;
          const hours = Math.floor(distance / (1000 * 60 * 60)) % 24;
          const minutes = Math.floor(distance / (1000 * 60)) % 60;
          const seconds = Math.floor((distance / 1000) % 60);
          setTimer({ days, hours, minutes, seconds });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, selectedDate]);

  const handleStart = () => {
    if (selectedDate) {
      setRunning(true);
    }
  };

  const handleReset = () => {
    setRunning(false);
    setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  return (
    <div className="container-Body">
      <h1>Countdown Timer</h1>
      <Datepicker onSelect={setSelectedDate} />
      <DisplayTimer {...timer} />
      <Toggle onStart={handleStart} onReset={handleReset} running={running} />
    </div>
  );
}

export default App;
