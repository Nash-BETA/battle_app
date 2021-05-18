import { Monster } from "./monster/monster";
import { Technique } from "./technique/technique";

export class Damage{

    damage(technique: Technique, monster: Monster):string{
        monster.hitPoint = monster.hitPoint - technique.power
        return technique.power + 'のダメージ';
    }

    type(){

    }
}