// Definition: useState starts a countdown when the button is clicked.

import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false); // Controls whether the timer runs

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    }
  }, [seconds, isRunning]); // Runs when `seconds` or `isRunning` changes

  return (
    <div>
    <h1>9. Starts a countdown when the button is clicked</h1>

      <h2>Countdown: {seconds}s</h2>

      {/* Start button */}
      <button onClick={() => setIsRunning(true)}>Start</button>

      {/* Stop button */}
      <button onClick={() => setIsRunning(false)}>Stop</button>

      {/* Reset button */}
      <button onClick={() => { setSeconds(10); setIsRunning(false); }}>
        Reset
      </button>
    </div>
  );
}

export default CountdownTimer;



