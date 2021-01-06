import React from "react";
import "./App.css";

import Card from "./components/layout/Card";

import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragamento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

// eslint-disable-next-line
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#10 - Comunicação indireta" color="#638CA6">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação direta" color="#FFA200">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={55}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Edu" }} />
      </Card>

      <Card titulo="#07 - Desafio Repetição - Produtos" color="#53BBF4">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#FF432E">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#354458">
        <Familia sobrenome="Fermiano">
          <FamiliaMembro nome="Edu" />
          <FamiliaMembro nome="Guilherme" />
          <FamiliaMembro nome="Marlete" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio aleatório" color="#FA6900">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E9E0D6">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Componente com parâmetro" color="#DC403B">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro componente" color="#E1D041">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
