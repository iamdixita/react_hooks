import React, { useState } from "react";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom';

import UseStateExamples from "./useState";
import UseEffectExamples from "./useEffect";

function App() {
    return (
        <div>
        <h1>React Hooks Demo</h1>
  
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/useState">useState</Link></li>
            <li><Link to="/useEffect">useEffect</Link></li>

          </ul>
        </nav>
  
        {/* Routes */}
        <Routes>
          <Route path="/useState" element={<UseStateExamples />} />
          <Route path="/useEffect" element={<UseEffectExamples/>} />
          <Route path="/" element={<h2>Select a Hook Example</h2>} />
        </Routes>
      </div>
    );
  }
  
export default App;
