import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeWater } from "../type/typeWater";

export class TechniqueWaterGun implements Technique{
    readonly technique_name:string = 'みずでっぽう';
    readonly type: Type = new TypeWater();
    readonly power:number = 20;
}