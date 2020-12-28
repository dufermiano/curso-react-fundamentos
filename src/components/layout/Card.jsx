import React from 'react'
import './Card.css'

// eslint-disable-next-line
export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#0F0',
        borderColor: props.color || '#0 F0'
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'> { props.titulo} </div>
            <div className='Content'>
                { props.children }
            </div>
        </div>
    )
}