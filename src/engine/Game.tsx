import { MakableItem, listOfMakableItems, listOfMakableItemsNames } from "../data/ListOfMakableItems";
import Player from "../model/Player";

export default class Game{
    private _makableItemsArr = listOfMakableItems;

    _findItem(itemName: listOfMakableItemsNames){
        return this._makableItemsArr.find((element) => {
            if( element.getNameOfItem === itemName ){
                return true;
            }
        });
    }

    getItemDetails({itemName}: {itemName: listOfMakableItemsNames}){
        return this._findItem(itemName);
    }

    makeItem({player, item}: {player: Player, item: MakableItem | undefined}){
        if( item != undefined ){
            setTimeout(() => {
                player.addItemToInventory({
                    item: item,
                    quantity: 1,
                });
                console.log(`item ${item?.getNameOfItem} has been made`)
                console.log(player);
            }, ( item != undefined ? item.getTimeToMake * 1000 : 0));
        } else {
            console.log('item not found');
        }
    }

    sellItem({player, item}: {player: Player, item: MakableItem | undefined }){
        const doesItemExist = player.findItemInInventory({item: item!});

        if( doesItemExist ){
            console.log('item exists in inventory');
            player.removeItemFromInventory({item: item!, quantity: 1})
            console.log(player);
        } else {
            console.log('item doesn\'t exist in inventory');
        }
    }
}