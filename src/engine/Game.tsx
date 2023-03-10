import CurrencyController from "../controller/CurrencyController";
import { MakableItem, listOfMakableItems } from "../data/ListOfMakableItems";
import Player, { InventoryControllerResults } from "../model/Player";
import { GameEngineResultMessage, listOfMakableItemsNames, CurrencyControllerResults } from "../data/ListOfEnum"

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
            setTimeout(() => {
                if( this.cc.removeCurrency({player: player, currencyToRemove: item.getCostToMake}) === CurrencyControllerResults.success ) {
                    player.addItemToInventory({
                        item: item,
                        quantity: 1,
                    });
                    console.log(`item ${item?.getNameOfItem} has been made`)
                    console.log(player);
                } else {
                    console.log(CurrencyControllerResults.insufficientFunds);
                }
                return GameEngineResultMessage.success;
            }, ( item !== undefined ? item.getTimeToMake * 1000 : 0));
            return GameEngineResultMessage.success;
        } else {
            console.log('item not found');
            return GameEngineResultMessage.error;
        }
    }

    sellItem({player, item}: {player: Player, item: MakableItem | undefined }){
        const doesItemExist = player.findItemInInventory({item: item!});

        if( doesItemExist ){
            console.log('item exists in inventory');
            if ( player.removeItemFromInventory({item: item!, quantity: 1}) === InventoryControllerResults.success){
                this.cc.addCurrency({player: player, currencyToAdd: item!.getAmountEarned});
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