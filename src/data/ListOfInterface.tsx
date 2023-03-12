import { MakableItem } from "../model/MakableItem";
import { listOfMakableItemsNames } from "./ListOfEnum";

export interface MakableItemProps{ 
    nameOfItem: listOfMakableItemsNames,
    timeToMake: number,
    amountEarned: number,
    costToMake: number,
    imgPath: string,
};

export interface PlayerProps{
    name: string,
    currentScore: number,
    currency: number,
    specialCurrency: number,
};

export interface PlayerInventoryProps{
    item: MakableItem,
    quantity: number,
};

export interface UpgradeItemProps {
    nameOfUpgrade: string,
    upgradeValue: number,
    costToUpgrade: number,
};

export interface CustomerInfoProps {
    customerName: string,
    customerImgPath: string,
    // itemToBuy: MakableItem,
    itemToBuy: listOfMakableItemsNames,
}