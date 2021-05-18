import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeWater } from "../type/typeWater";

export class TechniqueWaterGun implements Technique{
    technique_name:string = 'みずでっぽう';
    type: Type = new TypeWater();
    power:number = 20;
}