import {Dog} from "./dog.js";

export class Doberman extends Dog {

    constructor(){
        super({name: "Doberman", speed: 48});
    }
}