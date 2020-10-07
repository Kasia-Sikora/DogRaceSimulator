export class Bet {
    dom;

    checkIfUserWin(user, dog) {
        if(user.getBettingDog() === dog){
            alert("You win!!!")
            this.userWins(user);
        }else{
            alert("You lose!!!")
            this.userLose(user);
        }
        this.dom.updateCashView();
    }

    userWins(user) {
        let wonCash = user.bet * 2;
        user.win(wonCash);

    }

    userLose(user) {
        user.lose();
    }

    setDom(dom) {
        this.dom = dom;
    }
}