import Message from "./Message";
function Toggle({ onStart, onReset, running, finish }) {
  return (
    <>
      <button onClick={running ? onReset : onStart} className="toggle_button">
        {running ? "Reset" : "Start"}
      </button>
      {finish == "Yes" && <Message />}
    </>
  );
}

export default Toggle;
