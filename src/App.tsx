import './img/cats_clicker.gif'
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import ScoreController, { ScoreControllerScoreMessage } from './controller/ScoreController'
import ScoreComponent from './component/ScoreComponent';
import Game from './engine/Game';
import Player from './model/Player';
import GameController from './controller/GameController';
import UpgradeButton from './component/UpgradeButton';

function App() {
  const gameEngine = new Game(); 
  // const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 0}));
  const playerA = new Player({name: 'player', currentScore: 0, currency: 0});
  const sc = new ScoreController();
  const gc = new GameController();
  const [currentScore, setCurrentScore] = useState(sc.getScore());
  const logo = './img/cats_clicker.gif';
  const [currentEarningRate, setCurrentEarningRate] = useState(playerA.getEarningRatePerSecond);
  
  const update = () => {
      if(sc.addScore(playerA.getEarningRatePerSecond) !== ScoreControllerScoreMessage.error ){
        setCurrentScore(sc.getScore());
        playerA.setCurrentScore = sc.getScore();
        console.log(playerA);
      }
  };

  const handleButtonClick = () => {
    sc.addScore(1);
    setCurrentScore(sc.getScore());
    playerA.setCurrentScore = sc.getScore();
  }

  const handleIncreaseScoreRate = (newRate: number) => {
    switch(sc.subtractScore(newRate*10)){
      case ScoreControllerScoreMessage.purchased:
        console.log(`rate increased by ${newRate}`);
        gc.handleNewRateChanges({player: playerA, newRateToAdd: newRate});
        setCurrentEarningRate(playerA.getEarningRatePerSecond);
        setCurrentScore(sc.getScore());
        break;
      case ScoreControllerScoreMessage.insufficientFunds:
        console.log(ScoreControllerScoreMessage.insufficientFunds)
        break;
      case ScoreControllerScoreMessage.error:
      default:
        break;
    }
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
    load();
  })

  return (
    <div className="App">
       <header className="App-header">
        <ScoreComponent scoreValue={currentScore}/>
        <p hidden>{currentEarningRate}</p>
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        <section>
          {/* <button onClick={() => {startTimer()}}>Start Timer</button> */}
          {/* <button onClick={() => {stopTimer()}}>Stop Timer</button> */}
        </section>
        <section>
          <UpgradeButton buttonText='Increase rate by 1' onClickFunction={() => {handleIncreaseScoreRate(1)}} minimumAmount={10} playerCurrency={sc.getScore()}/>
          <UpgradeButton buttonText='Increase rate by 10' onClickFunction={() => {handleIncreaseScoreRate(10)}} minimumAmount={100} playerCurrency={sc.getScore()} /> 
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