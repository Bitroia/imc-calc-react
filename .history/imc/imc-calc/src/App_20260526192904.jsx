import { useState } from "react";
import { data } from "./data/data";
import ImcCalc from "./components/ImcCalc";
import "./components/ImcCalc.css";
import ImcTable from "./components/ImcTable";
import "./components/ImcTable.css"
import "./App.css";


function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setinfoClass] = useState("");
  return (
    <div className="container">
      {!imc ? <ImcCalc /> : <ImcTable />}
      <p>IMC Calc</p>
    </div>
  );
}

export default App;
