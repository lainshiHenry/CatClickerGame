import { MakableItem } from "../model/MakableItem";
import { listOfMakableItemsNames } from "./ListOfEnum";

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

const blankMakableItem: MakableItem = new MakableItem({
    nameOfItem: listOfMakableItemsNames.na,
    timeToMake: 0,
    amountEarned: 0,
    costToMake: 0,
});

export function findMakableItem(item: listOfMakableItemsNames) {
    if( item ){
        return listOfMakableItems.find((element) => {
            if( element.getNameOfItem === item){
                return true;
            }
            return blankMakableItem;
        });
    }
    return blankMakableItem;
}