import React from 'react'
import './RateComponent.css'

const RateComponent = ({rateValue}: {rateValue: number}) => {
  return (
    <h4 className='rateTextValue'>
        {`${rateValue} coins / second`}
    </h4>
  )
}

export default RateComponent