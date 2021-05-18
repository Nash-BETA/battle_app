import { Monster } from "./monster/monster";

/**
 * WonMonster - 所持モンスター
 */
export class WonMonster {
    monsterList:Monster[];
    constructor(monster:Monster[]){
        this.monsterList = monster;
    }

    /**
     * getMonster - ポケモンの入れ替え用
     * @param id
     * @returns
     */
    getMonster(id:null|number = null):Monster{
        //戦闘開始時は先頭のモンスターを返す
        if(id === null){
            return this.monsterList[0]
        }
        return this.monsterList[id]
    }
}