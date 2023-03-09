export enum listOfMakableItemsNames{
    AppleSlices = 'Apple Slices',
    BananaSlices = 'Banana Slices',
    Cereal = 'Cereal',
    na = 'NA'
}

export interface MakableItemProps{ 
    nameOfItem: listOfMakableItemsNames,
    timeToMake: number,
    amountEarned: number,
    costToMake: number,
} 

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

export const listOfMakableItems: MakableItem[] = [
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.AppleSlices,
        timeToMake: 3,
        amountEarned: 10,
        costToMake: 1,
    }),
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.BananaSlices,
        timeToMake: 2,
        amountEarned: 11,
        costToMake: 1,
    }),
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.Cereal,
        timeToMake: 5,
        amountEarned: 13,
        costToMake: 1,
    })
];
