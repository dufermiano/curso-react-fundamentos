/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Display from "./Display";
import Quantidade from "./Quantidade";
import Botao from "./Botao";
import { gerarNumeroMega } from "./logica";

export default (props) => {
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeroMega(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div>
      <h2>Números da Mega-Sena</h2>
      <Display numero={numeros}></Display>
      <Quantidade
        qtde={qtde}
        setQtde={setQtde}
        setNumeros={setNumeros}
        gerarNumero={gerarNumeroMega}
      ></Quantidade>
      <Botao setNumeros={(_) => setNumeros(gerarNumeroMega(qtde))}></Botao>
    </div>
  );
};
