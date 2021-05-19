import { Monster } from "./monster";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueWaterGun } from "../technique/techniqueWaterGun";
import { TypeWater } from "../type/typeWater";

/**
 * モンスター
 */
export class MizugameMonster extends Monster{
    protected name = 'ミズガメ';
    protected hitPoint = 100;
    protected type = new TypeWater();
    protected technique = [new TechniqueTackle(), new TechniqueWaterGun()];
}