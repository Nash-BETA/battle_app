import { Technique } from "./technique/technique";

/**
 * TechniqueList - 技リスト
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