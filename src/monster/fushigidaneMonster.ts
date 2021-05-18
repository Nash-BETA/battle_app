import { Monster } from "./monster";
import { TechniqueList } from "../techniqueList";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueVineWhip } from "../technique/techniqueVineWhip";

/**
 * モンスター
 */
export class FushigidaneMonster implements Monster{
    name = 'フシギダネ';
    hitPoint = 100;
    technique = new TechniqueList([new TechniqueTackle(), new TechniqueVineWhip()]);
}