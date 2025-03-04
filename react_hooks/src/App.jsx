import React, { useState } from "react";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom';

import UseStateExamples from "./useState";
import UseEffectExamples from "./useEffect";
import UseReducerExamples from "./useReducer";
import UseMemoExamples from "./useMemo";
import UseCallbackExamples from "./useCallback";
import UseRefExamples from "./useRef";

function App() {
    return (
        <div>
        {/* <h1>React Hooks Demo</h1> */}
  
        {/* Navigation Links */}
        <nav>
          <ul>   
            <li><Link to="/useState">useState</Link></li>
            <li><Link to="/useEffect">useEffect</Link></li>
            <li><Link to="/useReducer">useReducer</Link></li>
            <li><Link to="/useMemo">useMemo</Link></li>
            <li><Link to="/useCallback">useCallback</Link></li>
            <li><Link to="/useRef">useRef</Link></li>
          </ul>
        </nav>
  
        {/* Routes */}
        <Routes>
          <Route path="/useState" element={<UseStateExamples />} />
          <Route path="/useEffect" element={<UseEffectExamples/>} />
          <Route path="/useReducer" element={<UseReducerExamples/>} />
          <Route path="/useMemo" element={<UseMemoExamples/>} />
          <Route path="/useCallback" element={<UseCallbackExamples/>} />
          <Route path="/useRef" element={<UseRefExamples/>} />
          <Route path="/" element={<h2 style={{textAlign:"center",marginTop:"10rem",fontSize:"2rem"}}>Select a Hook Example</h2>} />
        </Routes>
      </div>
    );
  }
  
export default App;
