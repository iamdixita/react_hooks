import React from "react";
import EveryRender from "./demo1";
import RunOnceEffect from "./demo2";
import EffectWithState from "./demo3";
import EffectWithProps from "./demo4";
import FetchData from "./demo5";
import WindowResize from "./demo6";
import Timer from "./demo7";
import SearchUser from "./demo8";
import DarkMode from "./demo9";
import AnimatedText from "./demo10";

function UseEffectExamples() {
  return (
    <div>
      <h2>useEffect Examples</h2>
      <p>useEffect is a React Hook that lets you perform side effects in functional components. 
         It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount from class components.
      </p>
      <EveryRender/>
      <RunOnceEffect/>
      <EffectWithState/>
      <EffectWithProps/>
      <FetchData/>
      <WindowResize/>
      <Timer/>
      <SearchUser/>
      <DarkMode/>
      <AnimatedText/>
    </div>
  );
}

export default UseEffectExamples;
