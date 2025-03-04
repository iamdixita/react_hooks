import React from "react";
import ExpensiveComponent from "./demo1";
import FilteredList from "./demo2";
import SortedList from "./demo3";
import FibonacciCalculator from "./demo4";
import TransformedData from "./demo5";
import Cart from "./demo6";
import ConditionalRendering from "./demo7";
import PaginatedList from "./demo8";
import RegexHighlighter from "./demo9";
import CachedApiData from "./demo10";

function UseMemoExamples() {
    return (
      <div>
        <h2>useMemo Examples</h2>
        <p>The useMemo hook optimizes performance by caching computed values and preventing unnecessary recalculations.</p>
        <ExpensiveComponent/>
        <FilteredList/>
        <SortedList/>
        <FibonacciCalculator/>
        <TransformedData/>
        <Cart/>
        <ConditionalRendering/>
        <PaginatedList/>
        <RegexHighlighter/>
        <CachedApiData/>
      </div>
    );
  }
  
  export default UseMemoExamples;
  