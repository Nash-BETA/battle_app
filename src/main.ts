import { Command } from './command';
import { Monster } from './monster';

export class main{
    //ポケモンオブジェクト
    public monster:Monster;

    constructor(monster:Monster){
        this.monster = monster;
    }

    start() {
        const command_select = new Command().action().then(value => {
            if (value.action == 'escape'){
                console.log('プレイヤーとの戦いで逃げることはできない。');
                return this.start();
            } else if (value.action == 'battle'){
                const comand_battle = new Command().battle().then(value => {
                    console.log(value);
                    //IDからenumで技のインスタンスを取得

                    //ダメージ計算インスタンスに仕事を渡す。


                });
            }
        });
    }
}