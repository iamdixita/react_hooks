import React, { useState } from "react";
import "./App.css";
import Counter from "./useState/demo1";
import Toggle from "./useState/demo2";
import TextInput from "./useState/demo3";
import FormExample from "./useState/demo4";
import ShowHideText from "./useState/demo5";
import RandomNumber from "./useState/demo6";
import LightDarkMode from "./useState/demo7";
import ItemList from "./useState/demo8";
import CountdownTimer from "./useState/demo9";
import FetchData from "./useState/demo10";

function App() {

  return (
    <div className="container">
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

export default App;
