import React from "react";
import ClickCounter from "./demo1";
import KeyPressListener from "./demo2";
import SearchBar from "./demo3";
import DebouncedSearch from "./demo4";
import Timer from "./demo5";
import ItemList from "./demo6";
import Contextwithcallback from "./demo7";
import FilteredList from "./demo8";
import Counter from "./demo9";
import ApiFetcher from "./demo10";

function UseCallbackExamples() {
    return (
      <div>
        <h2>useCallback Examples</h2>
        <p>useCallback is a React Hook that memoizes functions so that they do not get recreated on every render.</p>
        <ClickCounter/>
        <KeyPressListener/>
        <SearchBar/>
        <DebouncedSearch/>
        <Timer/>
        <ItemList/>
        <Contextwithcallback/>
        <FilteredList/>
        <Counter/>
        <ApiFetcher/>
      </div>
    );
  }
  
  export default UseCallbackExamples;
  