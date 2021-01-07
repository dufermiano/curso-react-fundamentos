/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  return (
    <div>
      <label>Quantidade de números a ser gerados</label>
      <input
        min="6"
        max="17"
        type="number"
        id="inputQtdeNumeros"
        value={props.qtde}
        onChange={(e) => {
          props.setQtde(+e.target.value);
          props.setNumeros(props.gerarNumero(+e.target.value));
        }}
      />
    </div>
  );
};
