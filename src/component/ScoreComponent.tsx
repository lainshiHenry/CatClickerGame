import React from 'react'
import './ScoreComponent.css'

const ScoreComponent = ({scoreValue} : {scoreValue: number}) => {

    return (
        <h2 className='scoreValueText'>{scoreValue}</h2>
    )
}

export default ScoreComponent