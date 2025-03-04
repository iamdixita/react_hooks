// Sorts an array only when needed.

// Problem: Sorting a large array on every render is inefficient.
// Solution: useMemo ensures sorting only runs when sortOrder changes.

import React, { useState, useMemo } from "react";

// Sample numbers array
const numbers = [10, 20, 5, 7, 1, 99, 50];

const SortedList = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  // Memoized sorted array to avoid unnecessary sorting
  const sortedNumbers = useMemo(() => {
    console.log("🔢 Sorting Numbers...");
    return [...numbers].sort((a, b) => (sortOrder === "asc" ? a - b : b - a));
  }, [sortOrder]); // Runs only when `sortOrder` changes

  return (
    <div>
    <h1>3. Sorting Large Arrays </h1>
      <h2>Sorted Numbers:</h2>
      <ul>{sortedNumbers.map((num, index) => <li key={index}>{num}</li>)}</ul>
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>Toggle Sort Order</button>
    </div>
  );
};

export default SortedList;
