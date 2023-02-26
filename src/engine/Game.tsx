import React from "react";

export default class Game{
    _timeIntervalStart = 1000;
    _timeIntervalStop = 0;
    _intervalTime: any = null;

    startTimer(){
        console.log('start timer');
        this._intervalTime = setInterval(() => {
            console.log('time has passed');
        }, this._timeIntervalStart);
    }

    stopTimer(){
        clearInterval(this._intervalTime);
    }
}