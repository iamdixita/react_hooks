// useState is a React hook used to manage state inside functional components. 
// It allows components to store and update values dynamically without using class components.

// Definition: useState manages a simple counter.

import React, { useState } from "react";

function Counter() {
  // Declare a state variable `count` with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* When the button is clicked, increase the count by 1 */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;

