import { useRef } from "react";

export enum ScoreControllerScoreMessage{
    purchased = 'Purchased',
    added = 'Added',
    insufficientFunds = 'Insufficient Funds',
    error = 'Error has occured'
};

export default class ScoreController{
    private _score = useRef(0);

    getScore(){ return this._score.current }

    private _setScore(newScore: number){
        if( newScore >= 0) {
            this._score.current = newScore;
        }
    }

    addScore(value: number){
        if( value > 0 ){
            console.log(this.getScore());
            this._setScore(this.getScore() + value);
            return ScoreControllerScoreMessage.added;
        } else {
            return ScoreControllerScoreMessage.error;
        }
    }

    subtractScore(value: number){
        if( value > 0 && this._score.current > 0){
            if ( this._score.current >= value ){
                this._setScore(this._score.current - value);
                return ScoreControllerScoreMessage.purchased;
            } else if( this._score.current < value ){
                return ScoreControllerScoreMessage.insufficientFunds;
            } else {
                return ScoreControllerScoreMessage.error;
            }
        } else {
            return ScoreControllerScoreMessage.insufficientFunds;
        }
    }
}