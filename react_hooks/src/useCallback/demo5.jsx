// Ensures the timer function remains stable across renders.

import React, { useEffect, useState, useCallback } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  // Memoized function prevents function recreation
  const tick = useCallback(() => {
    setTime((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return <h2>Time: {time}s</h2>;
};

export default Timer;
