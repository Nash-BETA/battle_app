import { Technique } from "./technique";
import { Type } from "../type/type";
import { TypeNomal } from "../type/TypeNomal";


export class TechniqueTackle implements Technique{
    readonly technique_name:string = 'たいあたり';
    readonly type: Type = new TypeNomal();
    readonly power:number = 20;
}