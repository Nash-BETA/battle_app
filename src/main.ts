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
        const damege = new Damage();
        new CommandAction().select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                let turn_monster = this.activeMonster.getTurn();
                new CommandButtole(turn_monster).select().then(value => {
                    let damege_text = damege.damage(value.action, this.activeMonster.getNonTurn());
                    console.log(damege_text);
                    console.log('残りHP' + this.activeMonster.getNonTurn().hitPoint);
                    //攻撃された側がHP０以下になった場合終了
                    if (this.activeMonster.getNonTurn().hitPoint <= 0){
                        return;
                    }else{
                        this.start();
                    }
                });
            }
        });
    }
}