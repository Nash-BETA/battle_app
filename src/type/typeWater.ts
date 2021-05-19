import { Type } from "./type";
import { TypeFire } from "./typeFire";
import { TypeGrass } from "./typeGrass";

export class TypeWater implements Type {

    judgeCompatibility(techniqueType: Type): number {
        if (techniqueType instanceof TypeFire) {
            return 0.5;
        } else if (techniqueType instanceof TypeGrass) {
            return 2;
        }
        return 1;
    }
}