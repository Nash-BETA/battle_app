import { Technique } from "./technique/technique";

/**
 * TechniqueList - 技リスト
 */
export class TechniqueList {
    monsterTechiqueList:Technique[];
    constructor(technique: Technique[]){
        this.monsterTechiqueList = technique;
    }

    getTechniqueList(): Technique[]{
        return this.monsterTechiqueList;
    }
}