import { prompt } from 'inquirer';
import { Technique } from "../technique/technique";

export abstract class commandAbstract  {
    abstract type: string;
    abstract name: string;
    abstract message: string;
    abstract choices: { name: string; value: string | Technique; }[];

    select(): Promise<any> {
        const commandSelect = prompt([
            {
                type: this.type,
                name: this.name,
                message: this.message,
                choices: this.choices,
            },
        ]);
        return commandSelect;
    }
}