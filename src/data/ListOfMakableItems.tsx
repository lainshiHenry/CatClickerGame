import { MakableItem } from "../model/MakableItem";
import { listOfMakableItemsNames } from "./ListOfEnum";

export const listOfMakableItems: MakableItem[] = [
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.AppleSlices,
        timeToMake: 3,
        amountEarned: 10,
        costToMake: 1,
        imgPath: '../img/food_item/fruit/apple.svg'
    }),
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.Bananas,
        timeToMake: 2,
        amountEarned: 11,
        costToMake: 1,
        imgPath: '../img/food_item/fruit/banana.svg'
    }),
    new MakableItem({
        nameOfItem: listOfMakableItemsNames.Carrot,
        timeToMake: 5,
        amountEarned: 13,
        costToMake: 1,
        imgPath: '../img/food_item/vegetable/carrot.svg'
    })
];

export const blankMakableItem: MakableItem = new MakableItem({
    nameOfItem: listOfMakableItemsNames.na,
    timeToMake: 0,
    amountEarned: 0,
    costToMake: 0,
    imgPath: '../food_item/fruit/olive.svg'
});

export function findMakableItem(item: listOfMakableItemsNames) {
        return listOfMakableItems.find((element) => {
            console.log(`elemenet: ${element.getNameOfItem} & item: ${item} = matches ${element.getNameOfItem === item}`);
            if( element.getNameOfItem === item){
                return true;
            } 
            return false;
        });
}