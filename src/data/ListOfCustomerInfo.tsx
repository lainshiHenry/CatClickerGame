import { Customer } from "../model/Customer";
import { MakableItem } from "../model/MakableItem";
import { listOfMakableItemsNames } from "./ListOfEnum";
import { findMakableItem, listOfMakableItems } from "./ListOfMakableItems";

export const listOfCustomerIinfo: Customer[] = [
    new Customer({
        customerName: 'Customer 1',
        itemToBuy: findMakableItem(listOfMakableItemsNames.AppleSlices)!,
    }),
    new Customer({
        customerName: 'Customer 2',
        itemToBuy: findMakableItem(listOfMakableItemsNames.BananaSlices)!,
    }),
];

export const blankCustomer: Customer = new Customer({
    customerName: 'Blank',
    itemToBuy: findMakableItem(listOfMakableItemsNames.na)!,
});