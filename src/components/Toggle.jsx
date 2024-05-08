function Toggle({ onStart, onReset, running }) {
  return (
    <>
      <button onClick={running ? onReset : onStart} className="toggle_button">
        {running ? "Reset" : "Start"}
      </button>
    </>
  );
}

export default Toggle;
