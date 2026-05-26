import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import "./App.css";
import "./components/ImcCalc.css"

function App() {
  return (
    <div className="container">
      <p>IMC Calc</p>
      <ImcCalc/>
    </div>
  );
}

export default App;
