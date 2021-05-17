import { Monster } from "./monster/monster";

/**
 * 戦闘中のモンスター
 */
export class ActiveMonster{
    turnMonster:Monster;
    nonTurnMonster:Monster;

    constructor(myActiveMonster:Monster, enemyActiveMonster:Monster){
        this.turnMonster = myActiveMonster;
        this.nonTurnMonster = enemyActiveMonster;
    }

    getTurn(){
        return this.turnMonster;
    }
    getNonTurn() {
        return this.nonTurnMonster;
    }
}