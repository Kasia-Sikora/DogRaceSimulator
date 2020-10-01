import {race} from "../race.js";
import {bet} from "../bets.js";
import {dom} from "../view/dom.js";

export class Dog {
    constructor(dogObject) {
        this.name = dogObject.name;
        this.speed = this.setSpeed((dogObject.speed - 10), dogObject.speed)
        this.tiredness = 0;
    }

    setSpeed(minSpeed, maxSpeed) {
        return minSpeed + Math.floor((maxSpeed - minSpeed) * Math.random());
    }

    get dogSpeed() {
        return this.dogSpeed;
    }

    get dogName() {
        return this.name;
    }

    setDogColor(color) {
        this.color = color;
    }

    setPicture(picture) {
        this.picture = picture;
    }

    dogRun() {
        let finish = document.getElementById('finishLine');
        let dog = document.getElementById('dog ' + this.color);
        if (dog.getBoundingClientRect().left <= finish.getBoundingClientRect().left - (finish.getBoundingClientRect().left / 11)) {
            this.changeAppearance(dog);
            let move = dog.style.marginLeft.replace("px", "");
            dog.style.marginLeft = +move + this.speed + 'px';
        } else {
            alert(this.color + ' wins');
            race.clearIntervals(this.color);
            bet.checkIfUserWin(this.color);
        }
    }

    changeAppearance(dog) {
        if (this.picture[this.picture.length - 5] === '0') {
            dog.src = this.picture.replace("0", "2");
            this.picture = this.picture.replace("0", "2");
        } else if (this.picture[this.picture.length - 5] === '2') {
            dog.src = this.picture.replace("2", "1")
            this.picture = this.picture.replace("2", "1");
        } else if (this.picture[this.picture.length - 5] === '1') {
            dog.src = this.picture.replace("1", "2")
            this.picture = this.picture.replace("1", "2");
        }
    }
}