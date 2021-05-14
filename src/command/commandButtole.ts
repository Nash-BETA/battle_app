import { Technique } from "../technique/technique";
import { commandAbstract } from "./commandAbstract";

export class CommandButtole extends commandAbstract  {
    type: string    = 'list';
    name: string    = 'action';
    message: string = 'こうげきは？';
    choices: { name: string; value: string | Technique; }[];

    constructor(choices: { name: string; value:Technique}[]){
        super();
        this.choices = choices;
    }
}