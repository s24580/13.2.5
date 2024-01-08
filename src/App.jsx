import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculatorAction from "./components/CalculatorAction";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/add" element={<CalculatorAction action="add" />} />
        <Route path="/sub" element={<CalculatorAction action="sub" />} />
        <Route path="/mul" element={<CalculatorAction action="mul" />} />
        <Route path="/div" element={<CalculatorAction action="div" />} />
      </Routes>
    </Router>
  );
}

export default App;
