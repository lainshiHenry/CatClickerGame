import Player from "../model/Player";

export enum CurrencyControllerResults{
    success = 'Success',
    insufficientFunds = 'Insufficient Funds'
}

export default class CurrencyController{

    _checkForSufficientCurrency({player, currencyAmountToBeChecked}: {player: Player, currencyAmountToBeChecked: number}){
        return player.getCurrency >= currencyAmountToBeChecked;
    }

    addCurrency({player, currencyToAdd}: {player: Player, currencyToAdd: number}){
        player.setCurrency = player.getCurrency + currencyToAdd;
        return CurrencyControllerResults.success;
    }

    removeCurrency({player, currencyToRemove}: {player: Player, currencyToRemove: number}){
        if( this._checkForSufficientCurrency({player: player, currencyAmountToBeChecked: currencyToRemove})) {
            player.setCurrency = player.getCurrency - currencyToRemove;
            return CurrencyControllerResults.success;
        } else {
            return CurrencyControllerResults.insufficientFunds;
        }
    }
}