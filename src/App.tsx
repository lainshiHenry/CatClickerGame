import './img/cats_clicker.gif'
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Player from './model/Player';
import CurrencyComponent from './component/CurrencyComponent';
import Game from './engine/Game';
import { GameEngineResultMessage, listOfMakableItemsNames } from './data/ListOfEnum';
import NotificationComponent from './component/NotificationComponent';

function App() {
  const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 1, specialCurrency: 0}));
  const gameEngine = new Game();
  const logo = './img/cats_clicker.gif';
  const [openDialog, setOpenDialog] = useState(false);
  const [notificationText, setNotificationText] = useState(GameEngineResultMessage.empty);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleCreateItem = (itemToCreate: listOfMakableItemsNames) => {
    setNotificationText(
      gameEngine.makeItem({
        player: playerA.current, 
        item: gameEngine.getItemDetails({
          itemName: itemToCreate
        })
      })
    );
    setIsNotificationVisible(true);
  }
  
  const handleSellItem = (itemToSell: listOfMakableItemsNames) => {
    setNotificationText(
      gameEngine.sellItem({
        player: playerA.current, 
        item: gameEngine.getItemDetails({
          itemName: itemToSell
        })
      })
    );
    setIsNotificationVisible(true);
  }

  useEffect(() => {
    if(isNotificationVisible) {
      setTimeout(() => {
            setIsNotificationVisible(false);
            setNotificationText(GameEngineResultMessage.empty);
        }, 3000)
    }
  }, [isNotificationVisible]);


  return (
    <div className="App">
       <div className="App-header">
        {/* <CurrencyComponent player={playerA.current} /> */}
        <button className='mainButton' onClick={() => {}}><img src={logo} className="App-logo" alt="logo" /></button>
        <button onClick={() => { handleCreateItem(listOfMakableItemsNames.AppleSlices) }}>Make Apple Slices</button>
        <button onClick={() => { handleCreateItem(listOfMakableItemsNames.BananaSlices) }}>Make Banana Slices</button>
        <br />
        <button className='mainButton' onClick={() => {}}><img src={logo} className="App-logo" alt="logo" /></button>
        <button onClick={() => { handleSellItem(listOfMakableItemsNames.AppleSlices) }}>Sell Apple Slices</button>
        <button onClick={() => { handleSellItem(listOfMakableItemsNames.BananaSlices) }}>Sell Banana Slices</button>
        <NotificationComponent notificationText={notificationText} isNotificationVisible={isNotificationVisible}/>
        {/* <button onClick={() => {setOpenDialog(true)}}>Get More Cats</button>
        <UpgradeDialog player={playerA.current} openDialog={openDialog} onCloseDialogFunction={() => {setOpenDialog(false)}} listOfUpgrades={upgradeDataArr} handleScoreIncreaseFunction={handleIncreaseScoreRate} scoreController={sc}/> */}
      </div>
    </div>
  );
}

export default App;