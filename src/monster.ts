export class Monster {
    public name:string;
    public technique:{};
    public hitPoint:number;
    constructor(name: string, technique:{},hitPoint:number){
        this.name = name;
        this.technique = technique;
        this.hitPoint = hitPoint;
    }
}