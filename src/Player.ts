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

    getActiveMonster(): Monster{
        return this.activeMonster;
    }

    getWaitMonster(activeMonster:Monster|null):Monster[]{
        let waitMonster:Monster;
        let returnMonsterData:Monster[] = [];
        for (waitMonster of this.monsterList ){
            //同じポケモンは入れ替えられない&&ヒットポイントが０より上であること
            if (activeMonster == waitMonster && activeMonster.getHitPoint() > 0) {
                continue;
            }
            returnMonsterData.push(waitMonster)
        }

        return this.monsterList
    }

    setChangeMonster(id:number):Monster{
        return this.activeMonster = this.monsterList[id]
    }
}