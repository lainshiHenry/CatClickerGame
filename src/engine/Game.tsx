import CurrencyController from "../controller/CurrencyController";
import { listOfMakableItems } from "../data/ListOfMakableItems";
import Player from "../model/Player";
import { GameEngineResultMessage, listOfMakableItemsNames, CurrencyControllerResults, InventoryControllerResults } from "../data/ListOfEnum"
import { MakableItem } from "../model/MakableItem";

export default class Game{
    private _makableItemsArr = listOfMakableItems;
    cc = new CurrencyController();

    _findItem(itemName: listOfMakableItemsNames){
        return this._makableItemsArr.find((element) => {
            if( element.getNameOfItem === itemName ){
                return true;
            }
            return false;
        });
    }

    getItemDetails({itemName}: {itemName: listOfMakableItemsNames}){
        return this._findItem(itemName);
    }

    makeItem({player, item}: {player: Player, item: MakableItem | undefined}){
        if( item !== undefined ){
                if( this.cc.removeCurrency({player: player, currencyToRemove: item.getCostToMake}) === CurrencyControllerResults.success ) {
                    player.addItemToInventory({
                        item: item,
                        quantity: 1,
                    });
                    console.log(`item ${item?.getNameOfItem} has been made`)
                    console.log(player);
                    return GameEngineResultMessage.success;
                } else {
                    console.log(CurrencyControllerResults.insufficientFunds);
                    return GameEngineResultMessage.insufficient;
                }
                
        } else {
            console.log('item not found');
            return GameEngineResultMessage.error;
        }
    }

    sellItem({player, item, quantityToSell = 1}: {player: Player, item: MakableItem | undefined, quantityToSell: number }){
        const doesItemExist = player.findItemInInventory({item: item!});

        if( doesItemExist ){
            console.log('item exists in inventory');
            if ( player.removeItemFromInventory({item: item!, quantity: quantityToSell}) === InventoryControllerResults.success){
                this.cc.addCurrency({player: player, currencyToAdd: (item!.getAmountEarned * quantityToSell)});
                return GameEngineResultMessage.success;
            } else {
                console.log(InventoryControllerResults.insufficientItems);
                return GameEngineResultMessage.insufficient;
            }
        } else {
            console.log('item doesn\'t exist in inventory');
            return GameEngineResultMessage.itemDoesNotExist;
        }
    }

}