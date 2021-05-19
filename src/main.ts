import { ActivePlayer } from './activePlayer';
import { CommandAction } from './command/commandAction';
import { CommandButtole } from './command/commandButtole';
import { FushigidaneMonster } from './monster/fushigidaneMonster';
import { HitokageMonster } from './monster/hitokageMonster';
import { MizugameMonster } from './monster/mizugameMonster';
import { Player } from './Player';
export class Main{
    firstPlayer: Player;
    secondPlayer: Player;
    activePlayer: ActivePlayer;

    constructor(){
        //初期モンスターのセット
        this.firstPlayer = new Player('なかやま',[new FushigidaneMonster(), new HitokageMonster()]);
        this.secondPlayer = new Player('やまなか',[new MizugameMonster(), new HitokageMonster()]);
        //戦闘のモンスターをセット
        this.activePlayer = new ActivePlayer(this.firstPlayer, this.secondPlayer);
    }

    start() {
        let turnPlayer = this.activePlayer.getActivePlayer();
        let nonTurnPlayer = this.activePlayer.getNonActivePlayer();

        new CommandAction().select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'change') {
                turnPlayer.setChangeMonster(1);
                this.activePlayer.setChangeActivePlayer();
                return this.start();
            } else if (value.action == 'battle') {
                new CommandButtole(turnPlayer.getActiveMonster()).select().then(value => {
                    let damageText = nonTurnPlayer.activeMonster.setDamageHitPoint(value.action)
                    console.log(damageText);
                    console.log('残りHP' + nonTurnPlayer.activeMonster.getHitPoint());

                    //攻撃された側がHP０以下になった場合終了
                    if (nonTurnPlayer.activeMonster.getHitPoint() <= 0){
                        console.log(turnPlayer.playerName + 'の勝利');
                        return;
                    }else{
                        this.activePlayer.setChangeActivePlayer();
                        return this.start();
                    }
                });
            }
        });
    }
}