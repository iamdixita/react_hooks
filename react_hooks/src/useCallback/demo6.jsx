// Prevents unnecessary re-creation of handleClick functions for each item.

// Problem: Creating a new function inside .map() causes unnecessary function recreation.
// Solution: useCallback ensures the function remains stable.

import React, { useState, useCallback } from "react";

const ItemList = () => {
  const [items] = useState(["Apple", "Banana", "Cherry"]);

  // Memoized function for handling clicks
  const handleClick = useCallback((item) => {
    alert(`Clicked: ${item}`);
  }, []);

  return (
    <>
     <h1>6. Optimizing Button Click Handlers in a List</h1>
    <ul>
      {items.map((item) => (
        <li key={item}>
          {item} <button onClick={() => handleClick(item)}>Select</button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ItemList;
