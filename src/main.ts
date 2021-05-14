import { ActiveMonster } from './activeMonster';
import { Command } from './command';
import { CommandContent } from './commandContent';
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
        const actionCommand = new CommandContent('list', 'action', 'こうどうは？', [{ name: 'にげる', value: 'escape' }, { name: 'こうげき', value: 'battle' }]);
        const command_select = new Command(actionCommand).select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                let turn_monster = this.activeMonster.getTurn();
                let battleCommand: CommandContent = new CommandContent('list', 'attac', 'なににする？', turn_monster.techniqueList());
                new Command(battleCommand).select().then(value => {
                    console.log(value);
                    //IDからenumで技のインスタンスを取得

                    //ダメージ計算インスタンスに仕事を渡す。

                });
            }
        });
    }
}