import { ActivePlayer } from './activePlayer';
import { CommandAction } from './command/commandAction';
import { CommandButtole } from './command/commandButtole';
import { Player } from './Player';
import { FushigidaneMonster } from './monster/fushigidaneMonster';
import { HitokageMonster } from './monster/hitokageMonster';
import { MizugameMonster } from './monster/mizugameMonster';
import { CommandPokemonChange } from './command/commandPokemonChange';
export class Main{
    firstPlayer: Player;
    secondPlayer: Player;
    activePlayer: ActivePlayer;

    constructor(){
        //初期モンスターのセット
        this.firstPlayer = new Player('なかやま', [new FushigidaneMonster(), new HitokageMonster(), new MizugameMonster()]);
        this.secondPlayer = new Player('やまなか', [new FushigidaneMonster(), new HitokageMonster(),new MizugameMonster()]);
        //戦闘のモンスターをセット
        this.activePlayer = new ActivePlayer(this.firstPlayer, this.secondPlayer);
    }

    start() {
        let turnPlayer:Player = this.activePlayer.getActivePlayer();
        let nonTurnPlayer:Player = this.activePlayer.getNonActivePlayer();
        console.log(turnPlayer.getPlayerName() + 'のターン');
        new CommandAction().select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'change') {
                new CommandPokemonChange(turnPlayer).select().then(value => {
                    turnPlayer.setChangeMonster(value.action);
                    this.activePlayer.setChangeActivePlayer();
                    return this.start();
                });
            } else if (value.action == 'battle') {
                new CommandButtole(turnPlayer.getActiveMonster()).select().then(value => {
                    let damageText = nonTurnPlayer.activeMonster.setDamageHitPoint(value.action)
                    console.log(damageText);
                    console.log('残りHP' + nonTurnPlayer.activeMonster.getHitPoint());
                    //HP０以下になった場合終了
                    if (nonTurnPlayer.activeMonster.getHitPoint() <= 0){
                        //所持ポケモンが全て死んだ場合
                        if (nonTurnPlayer.getWaitMonster().length === 0){
                            console.log(turnPlayer.getPlayerName() + 'の勝利');
                            return;
                        //他にポケモンが残っている場合
                        }else{
                            console.log(nonTurnPlayer.getActiveMonster().getName() + 'は力尽きた');
                            new CommandPokemonChange(nonTurnPlayer).select().then(value => {
                                nonTurnPlayer.setChangeMonster(value.action);
                                this.activePlayer.setChangeActivePlayer();
                                return this.start();
                            });
                        }
                    }else{
                        this.activePlayer.setChangeActivePlayer();
                        return this.start();
                    }
                });
            }
        });
    }
}