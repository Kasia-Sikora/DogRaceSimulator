import {race} from "../race.js";


export let dom = {

    body: document.getElementsByTagName('body')[0],

    createStartButton: function () {
        let button = document.createElement('button');
        button.textContent = 'START';
        button.addEventListener('click', () => {
            race.startRace();
        })
        this.body.appendChild(button);
    },

    viewUsername: function (userName) {
        let usernameView = document.createElement('div');
        usernameView.setAttribute('id', 'userName');
        usernameView.textContent = userName;
        this.body.appendChild(usernameView);
    },

    viewCash: function (cash) {
        let cashView = document.createElement('div');
        cashView.setAttribute('id', 'cash');
        cashView.textContent = 'Total cash: ' + cash + ' $';
        this.body.appendChild(cashView);
    },

    viewBet: function (bet) {
        let betView = document.createElement('div');
        betView.setAttribute('id', 'bet');
        betView.textContent = 'Your bet: ' + bet + ' $';
        this.body.appendChild(betView);
    },

    usersDogChoice: function (dogInRace, user) {
        console.log('dogs in main ' + dogInRace);
        let box = document.createElement('div');
        box.setAttribute('id', 'dogsToChoose');
        for (let i = 0; i < dogInRace.length; i++) {
            let input = document.createElement('input');
            input.type = 'radio';
            input.id = dogInRace[i].color;
            input.name = 'dog';
            input.value = dogInRace[i].name;
            let label = document.createElement('label');
            label.setAttribute('for', dogInRace[i].color)
            label.innerText = dogInRace[i].color;
            box.appendChild(input);
            box.appendChild(label);
        }
        let button = document.createElement('button');
        button.type = 'button';
        button.id = 'submit';
        button.textContent = 'Submit';
        button.addEventListener('click', ()=> {
            this.submitForm(dogInRace, user);
        })
        box.appendChild(button)
        this.body.appendChild(box);
    },

    submitForm(dogInRace, user) {
        let dog = document.getElementsByName('dog');
        for(let i = 0; i < dog.length; i++) {
            if(dog[i].checked){
                dog = dog[i].id;
                for(let doggy of dogInRace){
                    if (doggy.color === dog){
                        user.setBettingDog(doggy)
                    }
                }
            }
        }
    },
    displayDogs(dogsInRace) {
        for(let i = 0; i < dogsInRace.length; i++){
            let image = document.createElement('img');
            image.setAttribute('src', dogsInRace[i].picture);
            image.setAttribute('alt', dogsInRace[i].color);
            image.setAttribute('id', 'dog ' + dogsInRace[i].color);
            let br = document.createElement('br');
            this.body.appendChild(image);
            this.body.appendChild(br);
        }
    },
}