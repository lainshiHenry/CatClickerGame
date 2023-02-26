import './img/cats_clicker.gif'
import React, { useEffect, useState } from 'react';
import './App.css';
import ScoreController from './controller/ScoreController'
import ScoreComponent from './component/ScoreComponent';
import Game from './engine/Game';

function App() {
  const gameEngine = new Game(); 
  const sc = new ScoreController();
  const [currentScore, setCurrentScore] = useState(sc.getScore());
  const logo = './img/cats_clicker.gif';
  
  const handleButtonClick = () => {
    console.log('button clicked');
    sc.addScore(1);
    setCurrentScore(sc.getScore());
  }

  function load(){
    startTimer();
  }

  function startTimer(){
    console.log('timer started');
    gameEngine.startTimer();
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
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        <section>
          <button onClick={() => {startTimer()}}>Start Timer</button>
          <button onClick={() => {stopTimer()}}>Stop Timer</button>

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