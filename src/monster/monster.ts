import { Technique } from "../technique/technique";
import { Type } from "../type/type";

/**
 * モンスター
 */
export abstract class Monster {
    protected abstract name:string;
    protected abstract type:Type;
    protected abstract hitPoint:number;
    protected abstract technique: Technique[];

    getName(){
        return this.name;
    }

    getHitPoint(){
        return this.hitPoint;
    }

    setDamageHitPoint(technique:Technique) {
        let compatibilityEffect = this.type.judgeCompatibility(technique.type);
        this.hitPoint = this.hitPoint - (technique.power * compatibilityEffect);
        return (technique.power * compatibilityEffect) + 'のダメージ';
    }

    getTechniqueList(): Technique[] {
        return this.technique;
    }
}