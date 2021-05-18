import { Monster } from "./monster";
import { TechniqueList } from "../techniqueList";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueHinoko } from "../technique/techniqueHinoko";

/**
 * モンスター
 */
export class HitokageMonster implements Monster{
    name = 'ヒトカゲ';
    hitPoint = 100;
    technique = new TechniqueList([new TechniqueTackle(), new TechniqueHinoko()]);
}