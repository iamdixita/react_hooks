// This effect runs after every re-render of the component. It's useful for debugging or logging updates.

import React, { useState, useEffect } from "react";

function EveryRender() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render
  useEffect(() => {
    console.log("Component re-rendered! Count:", count);
  });

  return (
    <div>
    <h1>1. Run useEffect on Every Render</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default EveryRender;
