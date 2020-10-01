import {Dog} from "./dog.js";

export class Greyhound extends Dog {

    constructor(){
        super({name: "Greyhound", speed: 72});
    }
}