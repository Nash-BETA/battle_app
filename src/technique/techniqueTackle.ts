import { Technique } from "./technique";
import { Type } from "../type/type";

export class TechniqueTackle implements Technique{
    technique_name:string = 'たいあたり';
    type: Type = Type.NOMAL;
    power:number = 20;
}