import { Technique } from "./technique";
import { Type } from "../type/type";

export class TechniqueHinoko implements Technique{
    technique_name:string = 'ひのこ';
    type: Type = Type.FIRE;
    power:number = 20;
}