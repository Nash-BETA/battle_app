export class Technique{
    technique_name:string;
    type:string;
    power:number;

    constructor(technique_name: string, type: string, power:number){
        this.technique_name = technique_name;
        this.type = type;
        this.power = power;
    }
}