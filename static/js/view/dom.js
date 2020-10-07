export class Dom {

    constructor(prepareForRace, race) {
        this.race = race;
        this.prepareForRace = prepareForRace;
        this.user = prepareForRace.user;
        this.init();
    }

    init() {
        this.displayDogs();
        this.usersDogChoice();
        this.createStartButton();
        this.viewUsername();
        this.viewBet();
        this.viewCash();
    }

    body = document.getElementsByTagName('body')[0];

    createStartButton() {
        let button = document.createElement('button');
        button.textContent = 'START';
        button.addEventListener('click', () => {
            if (this.user.bettingDog === undefined) {
                alert('You have to bet first')
            } else {
                this.race.startRace(this.prepareForRace.dogsInRace);
            }
        })
        this.body.appendChild(button);
    }

    viewUsername() {
        let usernameView = document.createElement('div');
        usernameView.setAttribute('id', 'userName');
        usernameView.textContent = this.user.name;
        this.body.appendChild(usernameView);
    }

    viewCash() {
        let cashView = document.createElement('div');
        cashView.setAttribute('id', 'cash');
        cashView.textContent = 'Total cash: ' + (this.user.cash - this.user.bet) + ' $';
        this.body.appendChild(cashView);
    }

    viewBet() {
        let betView = document.createElement('div');
        betView.setAttribute('id', 'bet');
        betView.textContent = 'Your bet: ' + this.user.bet + ' $';
        this.body.appendChild(betView);
    }

    usersDogChoice() {
        console.log('dogs in main ' + this.prepareForRace.dogsInRace);
        let box = document.createElement('div');
        box.setAttribute('id', 'dogsToChoose');
        for (let i = 0; i < this.prepareForRace.dogsInRace.length; i++) {
            let input = document.createElement('input');
            input.type = 'radio';
            input.id = this.prepareForRace.dogsInRace[i].color;
            input.name = 'dog';
            input.value = this.prepareForRace.dogsInRace[i].name;
            let label = document.createElement('label');
            label.setAttribute('for', this.prepareForRace.dogsInRace[i].color)
            label.innerText = this.prepareForRace.dogsInRace[i].color;
            box.appendChild(input);
            box.appendChild(label);
        }
        let button = document.createElement('button');
        button.type = 'button';
        button.id = 'submit';
        button.textContent = 'Submit';
        button.addEventListener('click', () => {
            this.submitForm(this.prepareForRace.dogsInRace, this.user);
        })
        box.appendChild(button)
        this.body.appendChild(box);
    }

    submitForm() {
        let dog = document.getElementsByName('dog');
        for (let i = 0; i < dog.length; i++) {
            if (dog[i].checked) {
                dog = dog[i].id;
                for (let doggy of this.prepareForRace.dogsInRace) {
                    if (doggy.color === dog) {
                        this.user.setBettingDog(doggy)
                    }
                }
            }
        }
    }

    displayDogs() {
        for (let i = 0; i < this.prepareForRace.dogsInRace.length; i++) {
            let image = document.createElement('img');
            image.setAttribute('src', this.prepareForRace.dogsInRace[i].picture);
            image.setAttribute('alt', this.prepareForRace.dogsInRace[i].color);
            image.setAttribute('id', 'dog ' + this.prepareForRace.dogsInRace[i].color);
            let br = document.createElement('br');
            this.body.appendChild(image);
            this.body.appendChild(br);
        }
    }

    updateCashView() {
        let cashView = document.getElementById('cash');
        cashView.textContent = 'Total cash: ' + this.user.cash + ' $';
        let betView = document.getElementById('bet');
        betView.textContent = 'Your bet: ' + this.user.bet + ' $';
    }
}