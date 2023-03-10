import { listOfMakableItemsNames } from "./ListOfEnum";

export interface MakableItemProps{ 
    nameOfItem: listOfMakableItemsNames,
    timeToMake: number,
    amountEarned: number,
    costToMake: number,
};