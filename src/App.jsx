import { useState } from "react";
import Datepicker from "./components/Datepicker";
import "./App.css";

function App() {
  const [selected, onSelected] = useState(null);
  return (
    <div className="container-Body">
      <h1>Countdown Timer</h1>
      <Datepicker />
    </div>
  );
}

export default App;
