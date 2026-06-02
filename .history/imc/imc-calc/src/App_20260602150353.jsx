import { useState } from "react";
import { data } from "./data/data";
import ImcCalc from "./components/ImcCalc";
import "./components/ImcCalc.css";
import ImcTable from "./components/ImcTable";
import "./components/ImcTable.css";
import "./App.css";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",",".")
    const heightFloat = +weight.replace(",",".")

    console.log("executou");
  };
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setinfoClass] = useState("");
  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}
      <p>IMC Calc</p>
    </div>
  );
}

export default App;
