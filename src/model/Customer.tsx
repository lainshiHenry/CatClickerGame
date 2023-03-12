import { listOfMakableItemsNames } from "../data/ListOfEnum";
import { CustomerInfoProps } from "../data/ListOfInterface";
import { findMakableItem } from "../data/ListOfMakableItems";

export class Customer{
    private _customerName: string = '';
    private _imgPath: string = '';
    private _itemToBuy: listOfMakableItemsNames;
    private _isSatisfied: boolean = false;

    constructor({customerName, itemToBuy, customerImgPath}: CustomerInfoProps){
        this._customerName = customerName;
        this._imgPath = customerImgPath;
        this._itemToBuy = itemToBuy;
        this._isSatisfied = false;
    }

    get getImgPath(){ return this._imgPath }
    get getCustomerName(){ return this._customerName }
    get getItemToBuy(){ return findMakableItem(this._itemToBuy) }
    get getIsSatisfied() { return this._isSatisfied }

    set setIsSatisfied(newValue:boolean) { this._isSatisfied = newValue }

    requestItemToBuy(){}
}