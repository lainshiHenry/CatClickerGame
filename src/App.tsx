import './img/cats_clicker.gif'
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import ScoreController from './controller/ScoreController'
import ScoreComponent from './component/ScoreComponent';
import Game from './engine/Game';
import Player from './model/Player';
import GameController from './controller/GameController';

function App() {
  const gameEngine = new Game(); 
  const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 0}));
  const sc = new ScoreController();
  const gc = new GameController();
  const [currentScore, setCurrentScore] = useState(sc.getScore());
  const logo = './img/cats_clicker.gif';
  const [currentEarningRate, setCurrentEarningRate] = useState(playerA.current.getEarningRatePerSecond);
  
  const update = () => {
    sc.addScore(playerA.current.getEarningRatePerSecond);
    setCurrentScore(sc.getScore());
  };

  const handleButtonClick = () => {
    sc.addScore(1);
    setCurrentScore(sc.getScore());
    playerA.current.setCurrentScore = sc.getScore();
  }

  const handleIncreaseScoreRate = (newRate: number) => {
    console.log(`rate increased by ${newRate}`);
    gc.handleNewRateChanges({player: playerA.current, newRateToAdd: newRate});
    setCurrentEarningRate(playerA.current.getEarningRatePerSecond);
  }

  function load(){
    startTimer();
  }

  function startTimer(){
    console.log('timer started');
    gameEngine.startTimer(update);
  }
  function stopTimer(){
    console.log('timer stopped');
    gameEngine.stopTimer();
  }

  useEffect(() => {
    // load();
  })

  return (
    <div className="App">
       <header className="App-header">
        <ScoreComponent scoreValue={currentScore}/>
        <p>{currentEarningRate}</p>
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        <section>
          <button onClick={() => {startTimer()}}>Start Timer</button>
          <button onClick={() => {stopTimer()}}>Stop Timer</button>
        </section>
        <section>
          <button onClick={() => {handleIncreaseScoreRate(1)}}>Increase rate by 1</button>
          <button onClick={() => {handleIncreaseScoreRate(10)}}>Increase rate by 10</button>
        </section>
      </header>
    </div>
  );
}

export default App;


/*

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='numberClickStyle'>{numClicked}</h2>
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        
      </header>
    </div>
  );
  */