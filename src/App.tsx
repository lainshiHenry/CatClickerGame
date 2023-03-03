import './img/cats_clicker.gif'
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import ScoreController, { ScoreControllerScoreMessage } from './controller/ScoreController'
import ScoreComponent from './component/ScoreComponent';
import Game from './engine/Game';
import Player from './model/Player';
import GameController from './controller/GameController';
import UpgradeButton from './component/UpgradeButton';
import NotificationComponent from './component/NotificationComponent';
import UpgradeDialog from './component/UpgradeDialog';
import { listOfUpgrades } from './data/ListOfUpgradables';

function App() {
  const gameEngine = new Game(); 
  // const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 0}));
  const playerA = new Player({name: 'player', currentScore: 0, currency: 0});
  const sc = new ScoreController();
  const gc = new GameController();
  const [currentScore, setCurrentScore] = useState(sc.getScore());
  const logo = './img/cats_clicker.gif';
  const [currentEarningRate, setCurrentEarningRate] = useState(playerA.getEarningRatePerSecond);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const upgradeDataArr = listOfUpgrades;
  let notificiationText = useRef('');
  
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
        notificiationText.current = ScoreControllerScoreMessage.purchased;
        setIsNotificationVisible(true);
        
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
    gameEngine.startTimer(update);
  }
  function stopTimer(){
    gameEngine.stopTimer();
  }

  useEffect(() => {
    load();
  })

  useEffect(() => {
    if(isNotificationVisible) {
      setTimeout(() => {
            setIsNotificationVisible(false);
            notificiationText.current = '';
        }, 3000)
    }
  }, [isNotificationVisible]);

  return (
    <div className="App">
       <div className="App-header">
        <ScoreComponent scoreValue={currentScore}/>
        <p hidden>{currentEarningRate}</p>
        <button className='mainButton' onClick={handleButtonClick}><img src={logo} className="App-logo" alt="logo" /></button>
        <button onClick={() => {setOpenDialog(true)}}>Get More Cats</button>
        {/* <section>
          <UpgradeButton buttonText='Increase rate by 1' onClickFunction={() => {handleIncreaseScoreRate(1)}} minimumAmount={10} playerCurrency={sc.getScore()}/>
          <UpgradeButton buttonText='Increase rate by 10' onClickFunction={() => {handleIncreaseScoreRate(10)}} minimumAmount={100} playerCurrency={sc.getScore()} /> 
        </section> */}
        <NotificationComponent notificationText={notificiationText.current} isNotificationVisible={isNotificationVisible} />
        <UpgradeDialog openDialog={openDialog} onCloseDialogFunction={() => {setOpenDialog(false)}} listOfUpgrades={upgradeDataArr} handleScoreIncreaseFunction={handleIncreaseScoreRate} scoreController={sc}/>
      </div>
    </div>
  );
}

export default App;