import { Monster } from "./monster/monster";

/**
 * Player - 所持モンスター
 */
export class Player {
    playerName:string;
    activeMonster:Monster;
    monsterList:Monster[];
    constructor(playerName:string,monster:Monster[]){
        this.playerName = playerName;
        this.monsterList = monster;
        this.activeMonster = monster[0];
    }

    getActiveMonster(){
        return this.activeMonster;
    }

    setChangeMonster(id:number):Monster{
        return this.activeMonster = this.monsterList[id]
    }
}