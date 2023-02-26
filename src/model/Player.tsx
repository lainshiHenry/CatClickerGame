interface PlayerProps{
    name: string,
    currentScore: number,
    currency: number
}

export default class Player{
    private _name: string = '';
    private _currentScore: number = 0;
    private _currency: number = 0;
    private _earningRatePerSecond: number = 0;

    constructor({name, currentScore, currency}: PlayerProps){
        this._name = name;
        this._currentScore = currentScore;
        this._currency = currency;
    }

    set setCurrentScore(newScore: number){ this._currentScore = newScore }
    set setEarningRatePerSecond( newRate: number ){ this._earningRatePerSecond = newRate }
    set setCurrency( newCurrency: number ) {this._currency = newCurrency }

    get getEarningRatePerSecond(){ return this._earningRatePerSecond }
    get getCurrency(){ return this._currency }
}
