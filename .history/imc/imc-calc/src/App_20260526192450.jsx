import { useState } from "react";
import {data} from './data/data'
import ImcCalc from "./components/ImcCalc";
import "./components/ImcCalc.css"
import "./App.css";



function App() {
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setinfoClass]
  return (
    <div className="container">
      <p>IMC Calc</p>
      <ImcCalc/>
    </div>
  );
}

export default App;
