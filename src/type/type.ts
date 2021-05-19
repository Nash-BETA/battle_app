
export interface Type {
    //タイプ別のダメージ倍率を出す
    judgeCompatibility(techniqueType: Type):number;
}