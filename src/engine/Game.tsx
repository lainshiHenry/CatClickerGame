export default class Game{
    _timeIntervalStart = 1000;
    _timeIntervalStop = 0;
    _intervalTime: any = null;

    startTimer(updateCallbackFunction: Function){
        console.log('start timer');
        this._intervalTime = setInterval(() => {
            console.log('time has passed');
            updateCallbackFunction();
        }, this._timeIntervalStart);
    }

    stopTimer(){
        clearInterval(this._intervalTime);
    }
}