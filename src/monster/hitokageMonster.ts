import { Monster } from "./monster";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueHinoko } from "../technique/techniqueHinoko";
import { TypeFire } from "../type/typeFire";

/**
 * モンスター
 */
export class HitokageMonster extends Monster{
    protected name = 'ヒトカゲ';
    protected hitPoint = 100;
    protected type = new TypeFire();
    protected technique = [new TechniqueTackle(), new TechniqueHinoko()];
}