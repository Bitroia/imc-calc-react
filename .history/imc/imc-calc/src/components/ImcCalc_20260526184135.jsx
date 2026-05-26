import React from "react";
import Button from "./Button";

const ImcCalc = () => {
  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 55kg"
            />
          </div>
        </div>
        <div className="action-control">
            <Button id=""/>
            <button>Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
