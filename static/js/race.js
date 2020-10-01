import {prepareForRace} from "./prepareForRace.js";

export let race = {

    intervals: [],

    startRace() {
        for (let dog of prepareForRace.dogsInRace) {
            let doggy = document.getElementById('dog ' + dog.color);
            doggy.src = dog.picture.replace("0", "1");
            let run = () => {
                dog.dogRun();
            }
            let interval = setInterval(run, 200);
            this.intervals.push(interval)
        }
    },

    clearIntervals(){
        this.intervals.forEach(clearInterval);
    }

}