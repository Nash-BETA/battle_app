import { Type } from "../type/type";

export interface Technique{
    readonly technique_name:string;
    readonly type:Type;
    readonly power:number;
}