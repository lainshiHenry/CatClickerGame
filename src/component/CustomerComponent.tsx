import React from 'react'
import { Customer } from '../model/Customer'
import './CustomerComponent.css'
import { listOfMakableItemsNames } from '../data/ListOfEnum'

const CustomerComponent = ({customer, handleCustomerPurchase}: {customer: Customer, handleCustomerPurchase: (itemToSell: listOfMakableItemsNames) => void}) => {

  return (
    <div className='customerComponent'>
        <p>I want to buy {customer.getQuantityToBuy} {customer.getItemToBuy?.getNameOfItem}</p>
        <div className='customerImage'>
          <button className='mainButton' onClick={() => {handleCustomerPurchase(customer.getItemToBuy!.getNameOfItem)}}>
            <img src={customer.getImgPath} className='App-logo' alt=''></img>
            <div className='iconBubble'><img src={customer.getItemToBuy?.getItemImgPath}></img></div>
          </button>
          
        </div>
        <p className='infoText'>Click on the picture to sell the items to me.</p>
    </div>
  )
}

export default CustomerComponent