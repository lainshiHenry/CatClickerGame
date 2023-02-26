import Player from "../model/Player";

export default class GameController{
    handleNewRateChanges({player, newRateToAdd}: {player: Player, newRateToAdd: number}){
        if ( player ) {
            if( player.getCurrency >= 0 && newRateToAdd > 0) {
                player.setEarningRatePerSecond = player.getEarningRatePerSecond + newRateToAdd;
            }
        }
    }
}