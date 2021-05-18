import { Type } from "./type";
import { TypeFire } from "./typeFire";

export class TypeWater implements Type {

    winType(montsterType:Type):boolean{
        if (montsterType instanceof TypeFire){
            return true;
        }
        return false
    }
}