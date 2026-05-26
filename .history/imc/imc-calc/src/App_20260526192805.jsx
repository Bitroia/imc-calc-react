import { useState } from "react";
import {data} from './data/data'
import ImcCalc from "./components/ImcCalc";
import "./components/ImcCalc.css"
import "./App.css";



function App() {
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setinfoClass] = useState("")
  return (
    <div className="container">
      {!imc ? (
        <ImcCalc/>
      ) :  (
        <Imc
      )}
      <p>IMC Calc</p>
      
    </div>
  );
}

export default App;
