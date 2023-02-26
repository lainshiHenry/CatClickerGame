import Player from "../model/Player";

export default class GameController{
    handleNewRateChanges({player, newRateToAdd}: {player: Player, newRateToAdd: number}){
        if ( player && newRateToAdd > 0) {
            player.setEarningRatePerSecond = player.getEarningRatePerSecond + newRateToAdd;
        }
    }
}