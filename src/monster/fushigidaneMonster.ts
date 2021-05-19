import { Monster } from "./monster";
import { TechniqueTackle } from "../technique/techniqueTackle";
import { TechniqueVineWhip } from "../technique/techniqueVineWhip";
import { TypeGrass } from "../type/typeGrass";

/**
 * モンスター
 */
export class FushigidaneMonster extends Monster{
    protected name = 'フシギダネ';
    protected hitPoint = 100;
    protected type = new TypeGrass();
    protected technique = [new TechniqueTackle(), new TechniqueVineWhip()];

}