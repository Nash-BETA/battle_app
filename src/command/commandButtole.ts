import { Monster } from "../monster/monster";
import { Technique } from "../technique/technique";
import { commandAbstract } from "./commandAbstract";

export class CommandButtole extends commandAbstract  {
    protected type: string    = 'list';
    protected name: string    = 'action';
    protected message: string = 'どのポケモンにする？';
    protected choices: { name: string; value: Technique; }[];

    constructor(monster:Monster){
        super();
        let technique: Technique;
        let returnData: { name: string; value: Technique }[] = [];
        for (technique of monster.getTechniqueList()) {
            let list = {
                'name': technique.technique_name,
                'value': technique
            };
            returnData.push(list);
        }
        this.choices = returnData;
    }
}