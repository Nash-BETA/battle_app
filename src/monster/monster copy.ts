import { TechniqueList } from "../techniqueList";
import { Monster } from "./monster";

/**
 * モンスター
 */
export class FushigidaneMonster implements Monster{
    name:string;
    hitPoint:number;
    technique:TechniqueList;
}