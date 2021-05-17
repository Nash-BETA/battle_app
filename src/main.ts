import { ActiveMonster } from './activeMonster';
import { CommandAction } from './command/commandAction';
import { CommandButtole } from './command/commandButtole';
import { Damage } from './damage';
import { FushigidaneMonster } from './monster/fushigidaneMonster';
import { WonMonster } from './wonMonster';
export class Main{
    myMonster: WonMonster;
    enemyMonster: WonMonster;
    activeMonster:ActiveMonster;

    constructor(){
        //初期モンスターのセット
        this.myMonster     = new WonMonster([new FushigidaneMonster()]);
        this.enemyMonster  = new WonMonster([new FushigidaneMonster()]);
        //戦闘のモンスターをセット
        this.activeMonster = new ActiveMonster(this.myMonster.getMonster(), this.enemyMonster.getMonster());
    }

    start() {
        new CommandAction().select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                let turn_monster = this.activeMonster.getTurn();
                new CommandButtole(turn_monster).select().then(value => {
                    console.log(value);
                    new Damage(value, this.activeMonster.getNonTurn())
                    //IDからenumで技のインスタンスを取得

                    //ダメージ計算インスタンスに仕事を渡す。

                });
            }
        });
    }
}