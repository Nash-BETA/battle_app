//https://typescript-jp.gitbook.io/deep-dive/recap/equality(構造の等価性)
import * as deepEqual from "fast-deep-equal";
import { Monster } from "./monster/monster";

/**
 * Player - 所持モンスター
 */
export class Player {
    private playerName:string;
    private monsterList:Monster[];
    public activeMonster:Monster;
    constructor(playerName: string, monster: Monster[]) {
        this.playerName = playerName;
        this.activeMonster = monster[0];
        this.monsterList = monster;
    }

    //プレイヤーの名前を返す
    getPlayerName(): string {
        return this.playerName;
    }

    //戦闘中のポケモンを返す
    getActiveMonster(): Monster{
        return this.activeMonster;
    }

    //手持ちのポケモンを配列で返す
    getWaitMonster(activeMonster:Monster|null = null):Monster[]{
        let waitMonster:Monster;
        let returnMonsterData:Monster[] = [];
        for (waitMonster of this.monsterList ){
            //同じポケモンは入れ替えられない&&ヒットポイントが０より上であること
            if (deepEqual(activeMonster, waitMonster) || waitMonster.getHitPoint() <= 0) {
                continue;
            }
            returnMonsterData.push(waitMonster)
        }
        return returnMonsterData
    }

    setChangeMonster(changeMonster: Monster):void{
        this.activeMonster = changeMonster;
    }
}