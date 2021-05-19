import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeFire } from "../type/typeFire";

export class TechniqueHinoko implements Technique{

    technique_name:string = 'ひのこ';
    type: Type = new TypeFire();
    power:number = 20;
}