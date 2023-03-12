import React from 'react'
import Player from '../model/Player'
import './CurrencyComponent.css'

const CurrencyComponent = ({player}: {player: Player}) => {

  return (
    <div className='currencyComponent'>
      <section className='firstSection'>
        <p>{`Currency: ${player.getCurrency}`}</p>
        <p>{`Special Currency: ${player.getSpecialCurrency}`}</p>
      </section>
    </div>
  )
}

export default CurrencyComponent