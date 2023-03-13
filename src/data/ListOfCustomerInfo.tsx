import { Customer } from "../model/Customer";
import { listOfMakableItemsNames } from "./ListOfEnum";

const currentHighestQuantityToBuy = 10;

function _getRandomNumber(highestNum: number){
    return Math.floor(Math.random() * highestNum);
}

export const listOfCustomerIinfo: Customer[] = [
    new Customer({
        customerName: 'Customer 1',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.AppleSlices)!,
        itemToBuy: listOfMakableItemsNames.AppleSlices,
        customerImgPath: '../img/cats_clicker.gif',
        quantityToBuy: _getRandomNumber(currentHighestQuantityToBuy),
    }),
    new Customer({
        customerName: 'Customer 2',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.Bananas)!,
        itemToBuy: listOfMakableItemsNames.Bananas,
        customerImgPath: '../img/cat.png',
        quantityToBuy: _getRandomNumber(currentHighestQuantityToBuy),
    }),
    new Customer({
        customerName: 'Customer 3',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.Carrot)!,
        itemToBuy: listOfMakableItemsNames.Carrot,
        customerImgPath: '../img/dog.png',
        quantityToBuy: _getRandomNumber(currentHighestQuantityToBuy),
    }),
    new Customer({
        customerName: 'Customer 4',
        // itemToBuy: findMakableItem(listOfMakableItemsNames.Bananas)!,
        itemToBuy: listOfMakableItemsNames.Bananas,
        customerImgPath: '../img/cat_2.png',
        quantityToBuy: _getRandomNumber(currentHighestQuantityToBuy),
    }),
];

export const blankCustomer: Customer = new Customer({
    customerName: 'Blank',
    // itemToBuy: findMakableItem(listOfMakableItemsNames.na)!,
    itemToBuy: listOfMakableItemsNames.AppleSlices,
    customerImgPath: '../img/cat_1.png',
    quantityToBuy: 1,
});