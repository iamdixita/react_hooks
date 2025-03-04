import React from "react";
import Counter from "./demo1";
import CounterWithStep from "./demo2";
import TodoApp from "./demo3";
import ShoppingCart from "./demo4";
import EnhancedModal from "./demo5";
import EnhancedDataFetching from "./demo6";
import StepForm from "./demo7";
import UndoRedoExample from "./demo8";
import Stopwatch from "./demo9";
import AuthComponent from "./demo10";

function UseReducerExamples() {
    return (
      <div>
        <h2>useState Examples</h2>
        <p>useReducer is a React Hook that manages complex state logic inside a component.
           It is an alternative to useState when state updates involve multiple conditions or dependent values.
           It works like Redux but for local component state.
        </p>
        <Counter/>
        <CounterWithStep/>
        <TodoApp/>
        <ShoppingCart/>
        <EnhancedModal/>
        <EnhancedDataFetching/>
        <StepForm/>
        <UndoRedoExample/>
        <Stopwatch/>
        <AuthComponent/>
      </div>
    );
  }
  
  export default UseReducerExamples;
  