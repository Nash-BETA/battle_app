import { Monster } from "./monster";
import { TechniqueList } from "../techniqueList";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueWaterGun } from "../technique/techniqueWaterGun";
import { TypeWater } from "../type/typeWater";

/**
 * モンスター
 */
export class MizugameMonster implements Monster{
    name = 'ミズガメ';
    hitPoint = 100;
    type = new TypeWater();
    technique = new TechniqueList([new TechniqueTackle(), new TechniqueWaterGun()]);
}