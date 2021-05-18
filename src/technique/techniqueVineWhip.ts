import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeGrass } from "../type/typeGrass";


export class TechniqueVineWhip implements Technique{
    technique_name:string = 'つるのむち';
    type: Type = new TypeGrass();
    power:number = 20;
}