export default class Game{
    _timeIntervalStart = 1000;
    _timeIntervalStop = 0;
    _intervalTime: any = null;

    startTimer(updateCallbackFunction: Function){
        this._intervalTime = setInterval(() => {
            updateCallbackFunction();
        }, this._timeIntervalStart);
    }

    stopTimer(){
        clearInterval(this._intervalTime);
    }
}