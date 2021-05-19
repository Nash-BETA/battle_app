import { Type } from "./type";

export class TypeNomal implements Type {

    judgeCompatibility(montsterType:Type,):number{
        return 1;
    }
}