import { Customer } from "../model/Customer";
import { MakableItem } from "../model/MakableItem";
import { listOfMakableItemsNames } from "./ListOfEnum";
import { findMakableItem, listOfMakableItems } from "./ListOfMakableItems";

export const listOfCustomerIinfo: Customer[] = [
    new Customer({
        customerName: 'Customer 1',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.AppleSlices)!,
        itemToBuy: listOfMakableItemsNames.AppleSlices,
        customerImgPath: '../img/cats_clicker.gif',
    }),
    new Customer({
        customerName: 'Customer 2',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.BananaSlices)!,
        itemToBuy: listOfMakableItemsNames.BananaSlices,
        customerImgPath: '../img/cat.png'
    }),
    new Customer({
        customerName: 'Customer 3',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.Cereal)!,
        itemToBuy: listOfMakableItemsNames.Cereal,
        customerImgPath: '../img/dog.png'
    }),
];

export const blankCustomer: Customer = new Customer({
    customerName: 'Blank',
    // itemToBuy: findMakableItem(listOfMakableItemsNames.na)!,
    itemToBuy: listOfMakableItemsNames.AppleSlices,
    customerImgPath: '../img/cat_1.jpeg'
});