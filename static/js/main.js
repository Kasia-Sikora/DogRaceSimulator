import {Dom} from "./view/dom.js";
import {PrepareForRace} from "./prepareForRace.js";
import {Race} from "./race.js";
import {Bet} from "./bets.js";


function start() {

    let prepareForRace = new PrepareForRace();
    let bet = new Bet();
    let race = new Race(prepareForRace, bet);
    let dom = new Dom(prepareForRace, race);
    bet.setDom(dom);

    console.log('First dog is: ' + prepareForRace.dogsInRace[0].name + ' and his speed is ' + prepareForRace.dogsInRace[0].speed);
    console.log('Second dog is: ' + prepareForRace.dogsInRace[1].name + ' and his speed is ' + prepareForRace.dogsInRace[1].speed);
    console.log('Third dog is: ' + prepareForRace.dogsInRace[2].name + ' and his speed is ' + prepareForRace.dogsInRace[2].speed);
}

start();