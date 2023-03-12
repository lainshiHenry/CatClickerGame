import React from 'react'
import Player from '../model/Player'
import './PlayerInventoryComponent.css'
import { PlayerInventory } from '../model/PlayerInventory'

const PlayerInventoryComponent = ({player}: {player: Player}) => {

    function generateInventoryListToDisplay(playerInventory: PlayerInventory[]){
        return <ul className={playerInventory.length > 0 ? 'InventoryList' : 'EmptyInventoryList'}>{playerInventory.map((value) => {
            return generateInventoryListItem(value);
        })}</ul>
    }

    function generateInventoryListItem(inventoryItem: PlayerInventory){
        return <li>
            <div className='InventoryListItem'>
                <img src={inventoryItem.getItem.getItemImgPath} alt={inventoryItem.getItem.getNameOfItem}></img>
                <p>{inventoryItem.getQuantity}</p>
            </div>
        </li>
    }

  return (
    <div className='PlayerInventoryComponent'>
        <h2>Inventory</h2>
        {generateInventoryListToDisplay(player.getInventory)}
    </div>
  )
}

export default PlayerInventoryComponent