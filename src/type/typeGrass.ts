import { Type } from "./type";
import { TypeFire } from "./typeFire";
import { TypeWater } from "./typeWater";

export class TypeGrass implements Type {

    judgeCompatibility(techniqueType: Type): number {
        if (techniqueType instanceof TypeWater) {
            return 2;
        } else if (techniqueType instanceof TypeFire) {
            return 0.5;
        }
        return 1;
    }
}