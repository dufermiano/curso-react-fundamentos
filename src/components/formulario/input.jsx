/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    // mudança de estado do componente
    setValor(e.target.value);
  }

  return (
    <div>
      <h2>{valor}</h2>
      <div>
        {/* componente controlado  */}
        <input
          className="form-control"
          value={valor}
          onChange={quandoMudar}
        />{" "}
        {/* componente readOnly pois sem o onChange, ele deve ter esse atributo  */}
        <input className="form-control" value={valor} readOnly />{" "}
        {/* componente não controlado, passar undefined no value */}
        <input className="form-control" value={undefined} />{" "}
      </div>
    </div>
  );
};
