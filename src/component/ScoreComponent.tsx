import React, { useEffect, useState } from 'react'
import ScoreController from '../controller/ScoreController';

const ScoreComponent = ({scoreValue} : {scoreValue: number}) => {
    // const [numClicked, setNumClicked] = useState(0);
    // const sc = new ScoreController();

    // function updateScore(){
    //     setNumClicked(sc.getScore());
    // }

    // useEffect(() => {
    //     updateScore();
    // })

    return (
        <h2 className='numberClickStyle'>{scoreValue}</h2>
    )
}

export default ScoreComponent