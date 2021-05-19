import { Type } from "./type";
import { TypeGrass } from "./typeGrass";
import { TypeWater } from "./typeWater";

export class TypeFire implements Type {

    judgeCompatibility(techniqueType:Type):number{
        if (techniqueType instanceof TypeGrass){
            return 2;
        } else if (techniqueType instanceof TypeWater){
            return 0.5;
        }
        return 1;
    }
}