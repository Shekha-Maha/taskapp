import React from 'react'
import './Title.css'

function Title(props) {
    return (
        <>
            <div className='Title'>
                <h2>{props.name}</h2>
            </div>
        </>
    )
}

export default Title
