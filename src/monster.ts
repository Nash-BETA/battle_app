import { Technique } from "./technique";
import { TechniqueList } from "./techniqueList";

/**
 * モンスター
 */
export class Monster {
    public name:string;
    public technique:TechniqueList;
    public hitPoint:number;
    constructor(name: string, technique: TechniqueList,hitPoint:number){
        this.name = name;
        this.technique = technique;
        this.hitPoint = hitPoint;
    }

    /**
     * コマンド用の技の配列の生成
     */
    getTechniqueCommand(){
        let techniqueList = this.technique.getTechniqueList();
        let technique:Technique;
        let returnData:{}[] = [];
        for (technique of techniqueList){
            let list = {};
            returnData.push(list);
        }
        return returnData;
    }
}