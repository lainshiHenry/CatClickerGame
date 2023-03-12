import { listOfCustomerIinfo } from "../data/ListOfCustomerInfo";

export default class CustomerController{
    private _getRandomNumber(highestNum: number){
        return Math.floor(Math.random() * highestNum);
    }

    getNextCustomer(){
        return listOfCustomerIinfo[this._getRandomNumber(listOfCustomerIinfo.length)];
    }
}