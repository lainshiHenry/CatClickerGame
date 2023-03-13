import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Player from './model/Player';
import CurrencyComponent from './component/CurrencyComponent';
import Game from './engine/Game';
import { GameEngineResultMessage, listOfMakableItemsNames } from './data/ListOfEnum';
import NotificationComponent from './component/NotificationComponent';
import { blankCustomer } from './data/ListOfCustomerInfo';
import CustomerComponent from './component/CustomerComponent';
import CustomerController from './controller/CustomerController';
import PlayerInventoryComponent from './component/PlayerInventoryComponent';

function App() {
  const playerA = useRef(new Player({name: 'player', currentScore: 0, currency: 1, specialCurrency: 0}));
  const customer = useRef(blankCustomer);
  const gameEngine = new Game();
  const cc = new CustomerController();
  // const [openDialog, setOpenDialog] = useState(false);
  const [notificationText, setNotificationText] = useState(GameEngineResultMessage.empty);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  function createCreateItemButton(itemToCreate: listOfMakableItemsNames){
    const textToDisplay = `Make ${itemToCreate}`;
    return <button onClick={() => { handleCreateItem(itemToCreate) }}>{textToDisplay}</button>
  }

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
  
  const handleSellItem = () => {
    const itemToSell = customer.current.getItemToBuy?.getNameOfItem;
    const quantityToSell = customer.current.getQuantityToBuy;
    const response = gameEngine.sellItem({
      player: playerA.current, 
      item: gameEngine.getItemDetails({
        itemName: itemToSell!
      }),
      quantityToSell: quantityToSell,
    });
    if( response === GameEngineResultMessage.success ){
      customer.current.setIsSatisfied = true;
      // currentCustomer.setIsSatisfied = true;
      setNotificationText(response);
      setIsNotificationVisible(true);
      handleCustomerChange();
    } else {
      setNotificationText(response);
      setIsNotificationVisible(true);
    }  
  }

  const handleCustomerChange = () => {
    if( customer.current.getIsSatisfied ){
      customer.current = cc.getNextCustomer();
    }
  }

  useEffect(() => {
    if(isNotificationVisible) {
      setTimeout(() => {
            setIsNotificationVisible(false);
            setNotificationText(GameEngineResultMessage.empty);
        }, 1000)
    }
  }, [isNotificationVisible]);

  // useEffect(() => {
  //   handleCustomerChange();
  // });

  return (
    <div className="App">
       <div className="App-header">
        <CurrencyComponent player={playerA.current} />
        <CustomerComponent customer={customer.current} handleCustomerPurchase={handleSellItem} />
        
        {createCreateItemButton(listOfMakableItemsNames.AppleSlices)}
        {createCreateItemButton(listOfMakableItemsNames.Bananas)}
        {createCreateItemButton(listOfMakableItemsNames.Carrot)}
        
        <PlayerInventoryComponent player={playerA.current}/>
        {/* <button className='mainButton' onClick={() => {}}><img src={logo} className="App-logo" alt="logo" /></button>
        <button onClick={() => { handleSellItem(listOfMakableItemsNames.AppleSlices) }}>Sell Apple Slices</button>
        <button onClick={() => { handleSellItem(listOfMakableItemsNames.Bananas) }}>Sell Banana Slices</button> */}
        <NotificationComponent notificationText={notificationText} isNotificationVisible={isNotificationVisible}/>
      </div>
    </div>
  );
}

export default App;