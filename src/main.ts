import { ActiveMonster } from './activeMonster';
import { CommandAction } from './command/commandAction';
import { CommandButtole } from './command/commandButtole';
import { WonMonster } from './wonMonster';
export class main{
    myMonster: WonMonster;
    enemyMonster: WonMonster;
    activeMonster:ActiveMonster;

    constructor(myMonster: WonMonster, enemyMonster:WonMonster){
        this.myMonster    = myMonster;
        this.enemyMonster = enemyMonster;
        this.activeMonster = new ActiveMonster(this.myMonster.getMonster(), this.enemyMonster.getMonster());
    }

    start() {
        new CommandAction().select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                let turn_monster = this.activeMonster.getTurn();
                new CommandButtole(turn_monster.getTechniqueCommand()).select().then(value => {
                    console.log(value);
                    //IDからenumで技のインスタンスを取得

                    //ダメージ計算インスタンスに仕事を渡す。

                });
            }
        });
    }
}