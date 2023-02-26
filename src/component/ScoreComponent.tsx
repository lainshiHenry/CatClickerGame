import React from 'react'

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