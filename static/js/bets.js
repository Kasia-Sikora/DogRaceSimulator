import {User} from "./model/user.js";

export let bet = {

    checkIfUserWin(color) {
        User.getBettingDog();
        console.log(color);
    }
}