import { Monster } from "./monster";
import { TechniqueList } from "../techniqueList";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueWaterGun } from "../technique/techniqueWaterGun";

/**
 * モンスター
 */
export class MizugameMonster implements Monster{
    name = 'ミズガメ';
    hitPoint = 100;
    technique = new TechniqueList([new TechniqueTackle(), new TechniqueWaterGun()]);
}