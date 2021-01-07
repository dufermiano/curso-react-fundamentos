/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  return (
    <button className="btn btn-success" onClick={props.setNumeros}>
      Gerar resultado
    </button>
  );
};
