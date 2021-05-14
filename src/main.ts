import { Command } from './command';
import { Monster } from './monster';

export class main{
    //ポケモンオブジェクト
    public monster:Monster;

    constructor(monster:Monster){
        this.monster = monster;
    }

    start() {

        const command_select = new Command('list', 'action', 'こうどうは？', [{ name: 'にげる', value: 'escape' }, { name: 'こうげき', value: 'battle'}]).select().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                const comand_battle = new Command('list', 'attac', 'なににする？', [{ name: 'たい', value: 'rash' }, { name: 'みず', value: 'wort' }]).select().then(value => {
                    console.log(value);
                    //IDからenumで技のインスタンスを取得

                    //ダメージ計算インスタンスに仕事を渡す。


                });
            }
        });
    }
}