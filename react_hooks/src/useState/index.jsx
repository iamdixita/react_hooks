import React from "react";
import Counter from "./demo1";
import Toggle from "./demo2";
import TextInput from "./demo3";
import FormExample from "./demo4";
import ShowHideText from "./demo5";
import RandomNumber from "./demo6";
import LightDarkMode from "./demo7";
import ItemList from "./demo8";
import CountdownTimer from "./demo9";
import FetchData from "./demo10";

function UseStateExamples() {
  return (
    <div>
      <h2>useState Examples</h2>
      <p>useState is a React hook used to manage state inside functional components. 
         It allows components to store and update values dynamically without using class components.
      </p>
      <Counter/>
        <Toggle/>
        <TextInput/>
        <FormExample/>
        <ShowHideText/>
        <RandomNumber/>
        <LightDarkMode/>
        <ItemList/>
        <CountdownTimer/>
        <FetchData/>
    </div>
  );
}

export default UseStateExamples;
