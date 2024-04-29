import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Indx from "./components/Indx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Indx />} />
          <Route path="/know-me" element={<About />} />
          <Route path="/back-pack" element={<Skills />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
