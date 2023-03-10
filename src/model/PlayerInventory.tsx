import { PlayerInventoryProps } from "../data/ListOfInterface";
import { MakableItem } from "./MakableItem";

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