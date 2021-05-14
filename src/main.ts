import { Command } from './command';
import { CommandContent } from './commandContent';
import { Monster } from './monster';

export class main{
    //ポケモンオブジェクト
    public monster:Monster;

    constructor(monster:Monster){
        this.monster = monster;
    }

    start() {
        const actionCommand = new CommandContent('list', 'action', 'こうどうは？', [{ name: 'にげる', value: 'escape' }, { name: 'こうげき', value: 'battle' }]);
        const command_select = new Command(actionCommand).select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                let battleCommand:CommandContent = new CommandContent('list', 'attac', 'なににする？', [{ name: 'たい', value: 'rash' }, { name: 'みず', value: 'wort' }]);
                new Command(battleCommand).select().then(value => {
                    console.log(value);
                    //IDからenumで技のインスタンスを取得

                    //ダメージ計算インスタンスに仕事を渡す。


                });
            }
        });
    }
}