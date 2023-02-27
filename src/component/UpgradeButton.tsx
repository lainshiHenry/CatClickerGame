import React, { useEffect, useState } from 'react'
import Player from '../model/Player';

interface UpgradeButtonProps {
    buttonText: string,
    onClickFunction: () => void,
    minimumAmount: number,
    playerCurrency: number
}

const UpgradeButton = ({buttonText, onClickFunction, minimumAmount, playerCurrency}: UpgradeButtonProps) => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        console.log(`testing playerCurrency ${playerCurrency} vs minimumAmount ${minimumAmount}`);
        if(playerCurrency >= minimumAmount ){
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    });

    return (
        <button onClick={onClickFunction} disabled={isButtonDisabled}>{buttonText}</button>
    )
}

export default UpgradeButton