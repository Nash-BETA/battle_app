import { Monster } from "./monster/monster";
import { Technique } from "./technique/technique";
import { Type } from "./type/type";

export class Damage{

    technique: Technique;
    monster: Monster;
    constructor(technique: Technique, monster: Monster){
        this.technique = technique
        this.monster = monster
    }

    //ダメージ処理
    setHitPoint():void{
        let excellentEffect = this.weakPoint(this.technique.type, this.monster.type);
        this.monster.hitPoint = this.monster.hitPoint - (this.technique.power * excellentEffect)
    }

    //ダメージのテキスト用
    getDamageText(): string {
        let excellentEffect = this.weakPoint(this.technique.type, this.monster.type);
        return (this.technique.power * excellentEffect) + 'のダメージ';
    }

    //ダメージの倍率
    weakPoint(techniqueType: Type, monsterType:Type):number{
        if(techniqueType.winType(monsterType)){
            return 2;
        }
        return 1;
    }
}