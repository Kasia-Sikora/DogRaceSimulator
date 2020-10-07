export class Race {

    intervals = [];
    winnerDog;

    constructor(prepareForRace, bet) {
        this.user = prepareForRace.user;
        this.bet = bet;
        this.dogsInRace = prepareForRace.dogsInRace;
        this.prepareForRace = prepareForRace;
    }

    startRace() {
        for (let dog of this.dogsInRace) {
            let doggy = document.getElementById('dog ' + dog.color);
            doggy.src = dog.picture.replace("0", "1");
            let run = () => {
                dog.dogRun(this);
            }
            let interval = setInterval(run, 200);
            this.intervals.push(interval)
        }
    }

    finishRound() {
        this.intervals.forEach(clearInterval);
        this.bet.checkIfUserWin(this.user, this.winnerDog);
        this.setDogsOnStart();
        this.prepareForRace.startNewRound();
    }

    setWinnerDog(dog){
        this.winnerDog = dog;
    }

    setDogsOnStart() {
        for(let dog of this.dogsInRace){
            dog.setDogOnStartPosition();
        }
    }
}