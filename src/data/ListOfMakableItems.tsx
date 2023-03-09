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
} 

export class MakableItem{
    // private _nameOfItem: string = '';
    private _nameOfItem: listOfMakableItemsNames = listOfMakableItemsNames.na;
    private _timeToMake: number = 0;
    private _amountEarned: number = 0;

    constructor({nameOfItem, timeToMake, amountEarned}: MakableItemProps) {
        this._nameOfItem = nameOfItem;
        this._timeToMake = timeToMake;
        this._amountEarned = amountEarned;
    }

    get getTimeToMake(){ return this._timeToMake }
    get getNameOfItem(){ return this._nameOfItem }
    get getAmountEarned(){ return this._amountEarned } 
}

export const listOfMakableItems: MakableItem[] = [
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.AppleSlices,
        timeToMake: 3,
        amountEarned: 10,
    }),
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.BananaSlices,
        timeToMake: 2,
        amountEarned: 11,
    }),
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.Cereal,
        timeToMake: 5,
        amountEarned: 13,
    })
];
