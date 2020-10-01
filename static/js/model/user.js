export class User {

    constructor(name, bet) {
        this.name = name;
        this.cash = 200;
        this.bet = bet;
    }

    setBettingDog(dog){
        this.bettingDog = dog;
    }

    getBettingDog(){
        return this.bettingDog;
    }

    setBet(bet) {
        return undefined;
    }

    viewCash(){
        return `${this.cash} $`
    }

    win(){

    }

    lose(){

    }
}