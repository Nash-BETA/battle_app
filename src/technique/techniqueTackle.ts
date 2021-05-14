import { Technique } from "./technique";

export class TechniqueTackle implements Technique{
    technique_name:string = 'たいあたり';
    type:string = 'ノーマル';
    power:number = 20;

    getTechniqueName(){
        return this.technique_name;
    }
}