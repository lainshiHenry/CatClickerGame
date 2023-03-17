import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Player from './model/Player';
import CurrencyComponent from './component/CurrencyComponent';
import Game from './engine/Game';
import { GameEngineResultMessage, listOfMakableItemsNames } from './data/ListOfEnum';
import NotificationComponent, { NotificationStatusType } from './component/NotificationComponent';
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
  const notificationType = useRef(NotificationStatusType.none);

  function createCreateItemButton(itemToCreate: listOfMakableItemsNames){
    const textToDisplay = `Make ${itemToCreate}`;
    return <button onClick={() => { handleCreateItem(itemToCreate) }}>{textToDisplay}</button>
  }

  const handleCreateItem = (itemToCreate: listOfMakableItemsNames) => {
    let result = gameEngine.makeItem({
      player: playerA.current, 
      item: gameEngine.getItemDetails({
        itemName: itemToCreate
      })
    });
    notificationType.current = (result === GameEngineResultMessage.success ? NotificationStatusType.success : NotificationStatusType.error);
    setNotificationText(result);
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
      setNotificationText(response);
      notificationType.current = NotificationStatusType.success;
      setIsNotificationVisible(true);
      handleCustomerChange();
    } else {
      setNotificationText(response);
      notificationType.current = NotificationStatusType.warning;
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
      // setTimeout(() => {
            setIsNotificationVisible(false);
            notificationType.current = NotificationStatusType.none;
            setNotificationText(GameEngineResultMessage.empty);

        // }, 1000)
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
        
        <div className='buttonGroup'>
          {createCreateItemButton(listOfMakableItemsNames.AppleSlices)}
          {createCreateItemButton(listOfMakableItemsNames.Bananas)}
          {createCreateItemButton(listOfMakableItemsNames.Carrot)}
        </div>
      
        <PlayerInventoryComponent player={playerA.current}/>
        <NotificationComponent notificationText={notificationText} isNotificationVisible={isNotificationVisible} notificationStatusType={notificationType.current}/>
      </div>
    </div>
  );
}

export default App;