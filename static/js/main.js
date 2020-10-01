import {dom} from "./view/dom.js";
import {prepareForRace} from "./prepareForRace.js";


function start() {

    let dogsInRace = prepareForRace.generateDogs();
    console.log(dogsInRace);
    dom.displayDogs(dogsInRace);
    let user = prepareForRace.createUser();
    let numberOfRounds = parseInt(prompt("Enter number of rounds You want to play: "));
    dom.usersDogChoice(dogsInRace, user);
    dom.createStartButton();
    dom.viewUsername(user.name);
    dom.viewBet(user.bet);
    dom.viewCash(user.cash - user.bet);

    console.log('First dog is: ' + dogsInRace[0].name +  ' and his speed is ' + dogsInRace[0].speed);
    console.log('Second dog is: ' + dogsInRace[1].name +  ' and his speed is ' + dogsInRace[1].speed);
    console.log('Third dog is: ' + dogsInRace[2].name +  ' and his speed is ' + dogsInRace[2].speed);
}

start();