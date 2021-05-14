import { Technique } from "../technique/technique";
import { TechniqueList } from "../techniqueList";

/**
 * モンスター
 */
export abstract class MonsterAbstract {
    abstract name:string;
    abstract technique:TechniqueList;
    abstract hitPoint:number;

    /**
     * コマンド用の技の配列
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