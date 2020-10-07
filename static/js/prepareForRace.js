import {User} from "./model/user.js";
import {GermanShepherd} from "./model/germanShepherd.js";
import {Doberman} from "./model/doberman.js";
import {Greyhound} from "./model/greyhound.js";
import {IbizanHound} from "./model/ibizanHound.js";
import {Whippet} from "./model/whippet.js";
import {Saluki} from "./model/saluki.js";

export class PrepareForRace {

    dogsInRace = [];
    user;

    constructor() {
        this.dogsInRace = this.generateDogs();
        this.user = this.createUser();
    }

    createUser() {
        let userName = prompt("Enter Your name: ");
        let userBet = parseInt(prompt("Enter Your bet: "));
        return new User(userName, userBet);
    }

    generateDogs() {
        let numberOfDogs = 3;
        let colors = ['red', 'green', 'blue'];
        let dogsPictures = ["../static/img/dogRed0.png", "../static/img/dogGreen0.png", "../static/img/dogBlue0.png"];
        let arrayOfDogs = [];
        while (numberOfDogs > 0) {
            let dog = this.addDogObject(Math.floor(Math.random() * Math.floor(6)));
            dog.setDogColor(colors[numberOfDogs - 1]);
            dog.setPicture(dogsPictures[numberOfDogs - 1])
            arrayOfDogs.push(dog);
            numberOfDogs--;
        }
        return arrayOfDogs;
    }

    addDogObject(number) {
        switch (number) {
            case 0:
                return new Doberman();
            case 1:
                return new GermanShepherd();
            case 2:
                return new Greyhound();
            case 3:
                return new IbizanHound();
            case 4:
                return new Saluki();
            case 5:
                return new Whippet();
        }
    }
}