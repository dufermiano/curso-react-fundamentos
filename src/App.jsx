import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragamento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

// eslint-disable-next-line
export default () =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>

            <Card titulo='#05 - Componente com filhos' color='#354458'>
                <Familia sobrenome="Fermiano">
                    <FamiliaMembro nome="Edu" />
                    <FamiliaMembro nome="Guilherme" />
                    <FamiliaMembro nome="Marlete" />
                </Familia>
            </Card>

            <Card titulo='#04 - Desafio aleatório' color='#FA6900'>
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo='#03 - Fragmento' color='#28ABE3'>
                <Fragmento />
            </Card>

            <Card titulo='#02 - Componente com parâmetro' color='#DC403B'>
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Pedro Silva'
                    nota={9.3} />
            </Card>

            <Card titulo='#01 - Primeiro componente' color='#E1D041'>
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>