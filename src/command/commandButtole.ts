import { Monster } from "../monster/monster";
import { Technique } from "../technique/technique";
import { commandAbstract } from "./commandAbstract";

export class CommandButtole extends commandAbstract  {
    type: string    = 'list';
    name: string    = 'action';
    message: string = 'こうげきは？';
    choices: { name: string; value: string | Technique; }[];

    constructor(monster:Monster){
        super();
        let monster_technique = monster.technique;
        let techniqueList = monster_technique.getTechniqueList();
        let technique: Technique;
        let returnData: { name: string; value: Technique }[] = [];
        for (technique of techniqueList) {
            let list = {
                'name': technique.technique_name,
                'value': technique
            };
            returnData.push(list);
        }
        this.choices = returnData;
    }
}