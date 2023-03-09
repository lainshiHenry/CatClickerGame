import './img/cats_clicker.gif'
import React, { useState, useRef } from 'react';
import './App.css';
import ScoreController, { ScoreControllerScoreMessage } from './controller/ScoreController'
import Player from './model/Player';
import UpgradeDialog from './component/UpgradeDialog';
import { UpgradeItemProps, listOfUpgrades } from './data/ListOfUpgradables';
import CurrencyComponent from './component/CurrencyComponent';
import { MakableItemProps, listOfMakableItemsNames } from './data/ListOfMakableItems';
import Game from './engine/Game';

function App() {
  const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 0, specialCurrency: 0}));
  const gameEngine = new Game();
  const logo = './img/cats_clicker.gif';
  const [openDialog, setOpenDialog] = useState(false);
  const upgradeDataArr = listOfUpgrades;

  const handleCreateItem = () => {}
  const handleSellItem = () => {}




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
        <button onClick={() => {gameEngine.makeItem({player: playerA.current, item: gameEngine.getItemDetails({itemName: listOfMakableItemsNames.AppleSlices})})}}>Make Apple Slices</button>
        <br />
        <button className='mainButton' onClick={() => {}}><img src={logo} className="App-logo" alt="logo" /></button>
        <button onClick={() => {gameEngine.sellItem({player: playerA.current, item: gameEngine.getItemDetails({itemName: listOfMakableItemsNames.AppleSlices})})}}>Sell Apple Slices</button>
        
        {/* <button onClick={() => {setOpenDialog(true)}}>Get More Cats</button>
        <UpgradeDialog player={playerA.current} openDialog={openDialog} onCloseDialogFunction={() => {setOpenDialog(false)}} listOfUpgrades={upgradeDataArr} handleScoreIncreaseFunction={handleIncreaseScoreRate} scoreController={sc}/> */}
      </div>
    </div>
  );
}

export default App;