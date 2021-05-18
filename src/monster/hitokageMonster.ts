import { Monster } from "./monster";
import { TechniqueList } from "../techniqueList";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueHinoko } from "../technique/techniqueHinoko";
import { TypeFire } from "../type/typeFire";

/**
 * モンスター
 */
export class HitokageMonster implements Monster{
    name = 'ヒトカゲ';
    hitPoint = 100;
    type = new TypeFire();
    technique = new TechniqueList([new TechniqueTackle(), new TechniqueHinoko()]);
}