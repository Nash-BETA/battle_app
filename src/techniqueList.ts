import { Technique } from "./technique";

/**
 * WonMonster - 所持モンスター
 */
export class TechniqueList {
    monsterList:Technique[];
    constructor(technique: Technique[]){
        this.monsterList = technique;
    }

    getTechniqueList(): Technique[]{
        return this.monsterList;
    }
}