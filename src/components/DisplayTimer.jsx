function DisplayTimer({ days, hours, minutes, seconds }) {
  return (
    <>
      <div className="countdown_display">
        <div>{days}</div>:<div>{hours}</div>:<div>{minutes}</div>:
        <div>{seconds}</div>
      </div>
      <div className="countdown_legend">
        <div>days</div>
        <div>hrs</div>
        <div>min</div>
        <div>sec</div>
      </div>
    </>
  );
}

export default DisplayTimer;
