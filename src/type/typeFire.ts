import { Type } from "./type";
import { TypeGrass } from "./typeGrass";

export class TypeFire implements Type {

    winType(montsterType:Type):boolean{
        if (montsterType instanceof TypeGrass){
            return true;
        }
        return false
    }
}