import { CustomerInfoProps } from "../data/ListOfInterface";
import { MakableItem } from "./MakableItem";

export class Customer{
    private _customerName: string = '';
    private _imgPath: string = '';
    private _itemToBuy: MakableItem;

    constructor({customerName, itemToBuy}: CustomerInfoProps){
        this._customerName = customerName;
        this._imgPath = '../img/cats_clicker.gif';
        // this._imgPath = '../img/cat.png';
        this._itemToBuy = itemToBuy;
    }

    get getImgPath(){ return this._imgPath }
    get getCustomerName(){ return this._customerName }
    get getItemToBuy(){ return this._itemToBuy }

    requestItemToBuy(){}
}