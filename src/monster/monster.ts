import { TechniqueList } from "../techniqueList";

/**
 * モンスター
 */
export interface Monster {
    name:string;
    hitPoint:number;
    technique: TechniqueList;
}