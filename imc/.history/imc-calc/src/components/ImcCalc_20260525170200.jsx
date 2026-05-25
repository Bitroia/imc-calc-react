import React from "react";

const ImcCalc = () => {
  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="hei"></label>
            </div>
        </div>
    </form>
  </div>;
};

export default ImcCalc;
