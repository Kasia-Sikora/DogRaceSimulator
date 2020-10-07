export class Race {

    intervals = [];
    winnerDog;

    constructor(prepareForRace, bet) {
        this.user = prepareForRace.user;
        this.bet = bet;
    }

    startRace(dogsInRace) {
        for (let dog of dogsInRace) {
            let doggy = document.getElementById('dog ' + dog.color);
            doggy.src = dog.picture.replace("0", "1");
            let run = () => {
                dog.dogRun(this);
            }
            let interval = setInterval(run, 200);
            this.intervals.push(interval)
        }
    }

    clearIntervals() {
        this.intervals.forEach(clearInterval);
        this.bet.checkIfUserWin(this.user, this.winnerDog)
    }

    setWinnerDog(dog){
        this.winnerDog = dog;
    }
}