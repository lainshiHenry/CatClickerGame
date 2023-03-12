import { Customer } from "../model/Customer";
import { listOfMakableItemsNames } from "./ListOfEnum";

export const listOfCustomerIinfo: Customer[] = [
    new Customer({
        customerName: 'Customer 1',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.AppleSlices)!,
        itemToBuy: listOfMakableItemsNames.AppleSlices,
        customerImgPath: '../img/cats_clicker.gif',
    }),
    new Customer({
        customerName: 'Customer 2',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.Bananas)!,
        itemToBuy: listOfMakableItemsNames.Bananas,
        customerImgPath: '../img/cat.png'
    }),
    new Customer({
        customerName: 'Customer 3',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.Carrot)!,
        itemToBuy: listOfMakableItemsNames.Carrot,
        customerImgPath: '../img/dog.png'
    }),
];

export const blankCustomer: Customer = new Customer({
    customerName: 'Blank',
    // itemToBuy: findMakableItem(listOfMakableItemsNames.na)!,
    itemToBuy: listOfMakableItemsNames.AppleSlices,
    customerImgPath: '../img/cat_1.jpeg'
});