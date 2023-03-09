import { MakableItem } from "../data/ListOfMakableItems";

export enum InventoryControllerResults{
    success = 'Success',
    insufficientItems = 'Insufficient Items',
    cannotFindItem = 'Cannot Find Item(s)',
}

interface PlayerProps{
    name: string,
    currentScore: number,
    currency: number,
    specialCurrency: number,
}

interface PlayerInventoryProps{
    item: MakableItem,
    quantity: number,
}

export class PlayerInventory{
    private _item: MakableItem;
    private _quantity: number;

    constructor({item, quantity}: PlayerInventoryProps){
        this._item = item;
        this._quantity = quantity;
    }

    get getItem(){ return this._item }
    get getQuantity() { return this._quantity }
    set setQuantity(newValue: number) { this._quantity = newValue }


}

export default class Player{
    private _name: string = '';
    private _currentScore: number = 0;
    private _currency: number = 0;
    private _specialCurrency: number = 0;
    private _earningRatePerSecond: number = 1;
    // private _inventory: MakableItem[] = [];
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

    get getEarningRatePerSecond(){ return this._earningRatePerSecond }
    get getCurrency(){ return this._currency }
    get getSpecialCurrency(){ return this._specialCurrency }
    get getCurrentScore() {return this._currentScore }
    get getInventory() { return this._inventory }

    findItemInInventory({item}: {item: MakableItem}){
        return this.getInventory.find((element) => {
            if( element.getItem.getNameOfItem === item?.getNameOfItem ){
                return true;
            }
        });
    }

    findItemIndexInInventory({item}: {item: MakableItem}){
        return this.getInventory.findIndex((element) => {
            if( element.getItem.getNameOfItem === item.getNameOfItem ){
                return true;
            }
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
