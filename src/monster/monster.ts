import { TechniqueList } from "../techniqueList";
import { Type } from "../type/type";

/**
 * モンスター
 */
export interface Monster {
    name:string;
    type:Type;
    hitPoint:number;
    technique: TechniqueList;
}