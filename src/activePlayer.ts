import { Player } from "./Player";

/**
 * 戦闘中のモンスター
 */
export class ActivePlayer{
    activePlayer:Player;
    nonActivePlayer: Player;

    constructor(myActivePlayer: Player, enemyActivePlayer: Player){
        this.activePlayer = myActivePlayer;
        this.nonActivePlayer = enemyActivePlayer;
    }

    //ターンのプレイヤー
    getActivePlayer(){
        return this.activePlayer;
    }
    //ターンでないプレイヤー
    getNonActivePlayer() {
        return this.nonActivePlayer;
    }
    //ターンの切替
    setChangeActivePlayer(){
        let nowActivePlayer = this.activePlayer;
        this.activePlayer = this.nonActivePlayer;
        this.nonActivePlayer = nowActivePlayer;
    }
}