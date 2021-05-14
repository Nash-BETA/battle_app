export class CommandContent {
    type: string;
    name: string;
    message: string;
    choices: { name: string; value: string; }[];

    constructor(type: string, name: string, message: string, choices: { name: string; value: string; }[]) {
        this.type = type;
        this.name = name;
        this.message = message;
        this.choices = choices;
    }
    getType(){
        return this.type;
    }
    getName() {
        return this.name;
    }
    getMessage() {
        return this.message;
    }
    getChoices() {
        return this.choices;
    }
}