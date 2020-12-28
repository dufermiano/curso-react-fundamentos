import React from 'react'
// eslint-disable-next-line
export default props => {
    
    const { min, max } = props

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    
    return (
        <div>
            <h2>Número aleatório</h2>
            <p>
                <strong>Valor Minimo: </strong> { min }
            </p>
            
            <p>
                <strong>Valor Máximo: </strong> { max }
            </p>
            
            <p>
                <strong>Aleatório: </strong> { aleatorio }
            </p>
            
        </div>
    )
}