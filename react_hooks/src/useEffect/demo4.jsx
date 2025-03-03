// This effect runs whenever a prop (name) changes. It's useful for responding to parent component updates.

import React, { useEffect } from "react";

function EffectWithProps({ name }) {
  // Runs when `name` prop changes
  useEffect(() => {
    console.log("Name changed to:", name);
  }, [name]);

  return(
    <>
    <h1>4. Run useEffect When Props Change</h1>
    <h2>Hello, {name}!</h2>
    </>
  ); 
}

export default EffectWithProps;
