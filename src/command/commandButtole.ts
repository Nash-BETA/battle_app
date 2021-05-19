import { Monster } from "../monster/monster";
import { Technique } from "../technique/technique";
import { commandAbstract } from "./commandAbstract";

export class CommandButtole extends commandAbstract  {
    protected type: string    = 'list';
    protected name: string    = 'action';
    protected message: string = 'こうげきは？';
    protected choices: { name: string; value: string | Technique; }[];

    constructor(monster:Monster){
        super();
        let techniqueList = monster.getTechniqueList();
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