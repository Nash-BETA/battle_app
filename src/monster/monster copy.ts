import { Technique } from "../technique/technique";
import { TechniqueList } from "../techniqueList";
import { MonsterAbstract } from "./monsterAbstract";

/**
 * モンスター
 */
export class Monster extends MonsterAbstract{
    public name:string;
    public technique:TechniqueList;
    public hitPoint:number;
    constructor(name: string, technique: TechniqueList,hitPoint:number){
        super();
        this.name = name;
        this.technique = technique;
        this.hitPoint = hitPoint;
    }

    /**
     * コマンド用の技の配列の生成
     */
    getTechniqueCommand(): { name: string; value: Technique }[] {
        let techniqueList = this.technique.getTechniqueList();
        let technique:Technique;
        let returnData: { name: string; value: Technique }[] = [];
        for (technique of techniqueList){
            let list = {
                'name': technique.getTechniqueName(),
                'value': technique
            };
            returnData.push(list);
        }
        return returnData;
    }
}