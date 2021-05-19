import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeNomal } from "../type/TypeNomal";


export class TechniqueTackle implements Technique{
    technique_name:string = 'たいあたり';
    type: Type = new TypeNomal();
    power:number = 20;
}