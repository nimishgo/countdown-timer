import { useState } from "react";
import Datepicker from "./components/Datepicker";
import DisplayTimer from "./components/DisplayTimer";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  const [selected, setSelectedDate] = useState(null);
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  return (
    <div className="container-Body">
      <h1>Countdown Timer</h1>
      <Datepicker onSelect={setSelectedDate} />
      <DisplayTimer {...timer} />
      <Toggle />
    </div>
  );
}

export default App;
