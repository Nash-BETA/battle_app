import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeGrass } from "../type/typeGrass";


export class TechniqueVineWhip implements Technique{
    readonly technique_name:string = 'つるのむち';
    readonly type: Type = new TypeGrass();
    readonly power:number = 20;
}
