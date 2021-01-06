/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        className="btn btn-primary"
        onClick={(_) => props.quandoClicar("fulano", gerarIdade(), gerarNerd())}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
