import { useRef } from "react";

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
        }
    }
}