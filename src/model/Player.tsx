import { InventoryControllerResults } from "../data/ListOfEnum";
import { PlayerProps } from "../data/ListOfInterface";
import { MakableItem } from "./MakableItem";
import { PlayerInventory } from "./PlayerInventory";

export default class Player{
    private _name: string = '';
    private _currentScore: number = 0;
    private _currency: number = 0;
    private _specialCurrency: number = 0;
    private _earningRatePerSecond: number = 1;
    private _inventory: PlayerInventory[] = [];

    constructor({name, currentScore, currency, specialCurrency}: PlayerProps){
        this._name = name;
        this._currentScore = currentScore;
        this._currency = currency;
        this._specialCurrency = specialCurrency;
        this._earningRatePerSecond = 0;
        this._inventory = [];
    }

    set setCurrentScore(newScore: number){ this._currentScore = newScore }
    set setEarningRatePerSecond( newRate: number ){ this._earningRatePerSecond = newRate }
    set setCurrency( newCurrency: number ) {this._currency = newCurrency }
    set setSpecialCurrency( newSpecialCurrency: number ) {this._specialCurrency = newSpecialCurrency }
    set _setInventory( updatedInventory: PlayerInventory[] ){ this._inventory = updatedInventory }

    get getEarningRatePerSecond(){ return this._earningRatePerSecond }
    get getCurrency(){ return this._currency }
    get getSpecialCurrency(){ return this._specialCurrency }
    get getCurrentScore() {return this._currentScore }
    get getInventory() { return this._inventory }
    get getPlayerName() { return this._name }

    findItemInInventory({item}: {item: MakableItem}){
        return this.getInventory.find((element) => {
            if( element.getItem.getNameOfItem === item?.getNameOfItem ){
                return true;
            }
            return false;
        });
    }

    findItemIndexInInventory({item}: {item: MakableItem}){
        return this.getInventory.findIndex((element) => {
            if( element.getItem.getNameOfItem === item.getNameOfItem ){
                return true;
            }
            return false;
        })
    }

    addItemToInventory({item, quantity}: {item: MakableItem | undefined, quantity: number}){
        if( item != null ) {
            const getItemFromInventory = this.findItemInInventory({item: item});

            if( getItemFromInventory ){
                // const itemIndexInInventory = this.findItemIndexInInventory({item: item!})
                this._addQuantityToInventoryItem({item: getItemFromInventory, quantityToAdd: quantity});
            } else {
                let temp: PlayerInventory = new PlayerInventory({item: item, quantity: quantity});
                this._inventory.push(temp); 
            }
        }
    }

    _addQuantityToInventoryItem({item, quantityToAdd}: {item: PlayerInventory, quantityToAdd: number}){
        item.setQuantity = item.getQuantity + quantityToAdd;
    }

    _removeQuantityFromInventoryItem({item, quantityToRemove}: {item: PlayerInventory, quantityToRemove: number}) {
        item.setQuantity = item.getQuantity - quantityToRemove;
        if(item.getQuantity === 0){
            this._cleanInventory({player: this});
        }
    }

    _cleanInventory({player}: {player: Player}){
        const tempArr = player.getInventory.filter((element) => {
            return element.getQuantity !== 0;
        });
        player._setInventory = tempArr;
        console.log(tempArr);
    }

    removeItemFromInventory({item, quantity}: {item: MakableItem, quantity: number}) {
        const getItemFromInventory = this.findItemInInventory({item: item});

        if( getItemFromInventory ){
            if( getItemFromInventory.getQuantity >= quantity){
                this._removeQuantityFromInventoryItem({item: getItemFromInventory, quantityToRemove: quantity});
                return InventoryControllerResults.success;
            } else {
                return InventoryControllerResults.cannotFindItem;
            }
        } else {
            return InventoryControllerResults.insufficientItems;
        }
    }
}
