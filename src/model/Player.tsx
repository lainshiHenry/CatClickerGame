interface PlayerProps{
    name: string,
    currentScore: number,
}

export default class Player{
    private _name: string = '';
    private _currentScore: number = 0;
    private _earningRatePerSecond: number = 0;

    constructor({name, currentScore}: PlayerProps){
        this._name = name;
        this._currentScore = currentScore;
    }

    set setCurrentScore(newScore: number){ this._currentScore = newScore }
    set setEarningRatePerSecond( newRate: number ){ this._earningRatePerSecond = newRate }

    get getEarningRatePerSecond(){ return this._earningRatePerSecond }
}
