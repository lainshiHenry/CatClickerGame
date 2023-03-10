import React from 'react'
import { Customer } from '../model/Customer'
import './CustomerComponent.css'
import { MakableItem } from '../model/MakableItem'
import { listOfMakableItemsNames } from '../data/ListOfEnum'

const CustomerComponent = ({customer, handleCustomerPurchase}: {customer: Customer, handleCustomerPurchase: (itemToSell: listOfMakableItemsNames) => void}) => {


  return (
    <div className='customerComponent'>
        <p>I want to buy {customer.getItemToBuy.getNameOfItem}</p>
        <button className='mainButton' onClick={() => {handleCustomerPurchase(customer.getItemToBuy.getNameOfItem)}}>
            <img src={customer.getImgPath} className='App-logo'></img>
        </button>
        
    </div>
  )
}

export default CustomerComponent