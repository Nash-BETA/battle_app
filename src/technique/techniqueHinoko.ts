import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeFire } from "../type/typeFire";

export class TechniqueHinoko implements Technique{
    readonly technique_name:string = 'ひのこ';
    readonly type: Type = new TypeFire();
    readonly power:number = 20;
}