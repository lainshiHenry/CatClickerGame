import './img/cats_clicker.gif'
import React, { useState, useRef } from 'react';
import './App.css';
import Player from './model/Player';
import CurrencyComponent from './component/CurrencyComponent';
import { listOfMakableItemsNames } from './data/ListOfMakableItems';
import Game from './engine/Game';

function App() {
  const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 1, specialCurrency: 0}));
  const gameEngine = new Game();
  const logo = './img/cats_clicker.gif';
  const [openDialog, setOpenDialog] = useState(false);

  const handleCreateItem = (itemToCreate: listOfMakableItemsNames) => {
    gameEngine.makeItem({
      player: playerA.current, 
      item: gameEngine.getItemDetails({
        itemName: itemToCreate
      })
    })
  }
  
  const handleSellItem = (itemToSell: listOfMakableItemsNames) => {
    gameEngine.sellItem({
      player: playerA.current, 
      item: gameEngine.getItemDetails({
        itemName: itemToSell
      })
    })
  }




  // const handleIncreaseScoreRate = (player: Player, item: UpgradeItemProps) => {
  //   console.log(`player: ${player.getCurrency} | item: ${item.costToUpgrade}`);

  //   if( !player.getCurrency || !item.costToUpgrade ) {
  //     console.log(ScoreControllerScoreMessage.error);
  //   } else if( player.getCurrency < item.costToUpgrade ){
  //     console.log(ScoreControllerScoreMessage.insufficientFunds);
  //     // notificiationText.current = ScoreControllerScoreMessage.insufficientFunds;
  //     // setIsNotificationVisible(true);
  //   } else if ( player.getCurrency >= item.costToUpgrade ){
  //     player.setCurrency = player.getCurrency - item.costToUpgrade;
  //     player.setEarningRatePerSecond = player.getEarningRatePerSecond + item.upgradeValue;
  //     // notificiationText.current = ScoreControllerScoreMessage.purchased;
  //     // setIsNotificationVisible(true);
  //   } else {
  //     console.log(ScoreControllerScoreMessage.error);
  //   }
  // }

  // useEffect(() => {
  //   if(isNotificationVisible) {
  //     setTimeout(() => {
  //           setIsNotificationVisible(false);
  //           notificiationText.current = '';
  //       }, 3000)
  //   }
  // }, [isNotificationVisible]);


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
        
        {/* <button onClick={() => {setOpenDialog(true)}}>Get More Cats</button>
        <UpgradeDialog player={playerA.current} openDialog={openDialog} onCloseDialogFunction={() => {setOpenDialog(false)}} listOfUpgrades={upgradeDataArr} handleScoreIncreaseFunction={handleIncreaseScoreRate} scoreController={sc}/> */}
      </div>
    </div>
  );
}

export default App;