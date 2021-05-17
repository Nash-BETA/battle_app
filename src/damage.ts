import { Monster } from "./monster/monster";
import { Technique } from "./technique/technique";

export class Damage{
    technique:Technique;
    monster:Monster;
    constructor(technique: Technique, monster:Monster){
        this.technique = technique;
        this.monster   = monster;
    }

    damage(){

    }

    type(){

    }
}