import { useState } from "react";
function Datepicker({ onSelect }) {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    onSelect(new Date(e.target.value));
  };

  return (
    <input
      className="datepicker"
      type="datetime-local"
      value={selectedDate}
      onChange={handleDateChange}
      min={new Date().toISOString().slice(0, 16)}
      max={new Date(new Date().getTime() + 99 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 16)}
      required
    />
  );
}

export default Datepicker;
