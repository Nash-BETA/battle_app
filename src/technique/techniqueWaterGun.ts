import { Technique } from "./technique";
import { Type } from "../type/type";

export class TechniqueWaterGun implements Technique{
    technique_name:string = 'みずでっぽう';
    type: Type = Type.WATER;
    power:number = 20;
}