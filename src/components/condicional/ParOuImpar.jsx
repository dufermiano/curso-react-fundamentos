/* eslint-disable import/no-anonymous-default-export */
import React from "react";

// forma mais tradicional no React!! usando ternários

export default (props) => {
  const isPar = props.numero % 2 === 0;

  return <div>{isPar ? <span>Par</span> : <span>imPar</span>}</div>;
};
