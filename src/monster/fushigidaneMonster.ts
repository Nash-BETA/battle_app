import { TechniqueList } from "../techniqueList";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { Monster } from "./monster";

/**
 * モンスター
 */
export class FushigidaneMonster implements Monster{
    name:string;
    hitPoint:number;
    technique:TechniqueList;

    constructor() {
        this.name = 'フシギダネ';
        this.hitPoint = 100;
        this.technique = new TechniqueList([new TechniqueTackle()]);
    }
}