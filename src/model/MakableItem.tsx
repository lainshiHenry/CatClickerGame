import { listOfMakableItemsNames } from "../data/ListOfEnum";
import { MakableItemProps } from "../data/ListOfInterface";

export class MakableItem{
    // private _nameOfItem: string = '';
    private _nameOfItem: listOfMakableItemsNames = listOfMakableItemsNames.na;
    private _timeToMake: number = 0;
    private _amountEarned: number = 0;
    private _costToMake: number = 0;

    constructor({nameOfItem, timeToMake, amountEarned, costToMake}: MakableItemProps) {
        this._nameOfItem = nameOfItem;
        this._timeToMake = timeToMake;
        this._amountEarned = amountEarned;
        this._costToMake = costToMake;
    }

    get getTimeToMake(){ return this._timeToMake }
    get getNameOfItem(){ return this._nameOfItem }
    get getAmountEarned(){ return this._amountEarned } 
    get getCostToMake() { return this._costToMake }
}