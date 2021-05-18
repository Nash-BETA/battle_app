import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeNomal } from "../type/typeWater copy";


export class TechniqueTackle implements Technique{
    technique_name:string = 'たいあたり';
    type: Type = new TypeNomal();
    power:number = 20;
}