import { MonsterAbstract } from "./monster/monsterAbstract";

/**
 * 戦闘中のモンスター
 */
export class ActiveMonster{
    myActiveMonster: Monster;
    enemyActiveMonster: Monster;
    turnMonster:Monster;

    constructor(myActiveMonster:Monster, enemyActiveMonster:Monster){
        this.myActiveMonster   = myActiveMonster;
        this.enemyActiveMonster = enemyActiveMonster;
        this.turnMonster = myActiveMonster;
    }

    getTurn(){
        return this.turnMonster;
    }
}