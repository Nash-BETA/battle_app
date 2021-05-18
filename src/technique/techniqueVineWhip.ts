import { Technique } from "./technique";
import { Type } from "../type/type";

export class TechniqueVineWhip implements Technique{
    technique_name:string = 'つるのむち';
    type: Type = Type.GRASS;
    power:number = 20;
}