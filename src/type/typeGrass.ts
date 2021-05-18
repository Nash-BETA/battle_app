import { Type } from "./type";
import { TypeWater } from "./typeWater";

export class TypeGrass implements Type {

    winType(montsterType:Type):boolean{
        if (montsterType instanceof TypeWater){
            return true;
        }
        return false
    }
}