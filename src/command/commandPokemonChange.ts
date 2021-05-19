import { Monster } from "../monster/monster";
import { Player } from "../Player";
import { commandAbstract } from "./commandAbstract";

export class CommandPokemonChange extends commandAbstract  {
    protected type: string    = 'list';
    protected name: string    = 'action';
    protected message: string = 'いれかえるポケモンは？';
    protected choices: { name: string; value: Monster; }[];

    constructor(player:Player){
        super();
        let activeMonster: Monster = player.getActiveMonster();
        let monster: Monster;
        let returnData: { name: string; value: Monster }[] = [];
        for (monster of player.getWaitMonster(activeMonster)) {
            let list = {
                'name': monster.getName(),
                'value': monster
            };
            returnData.push(list);
        }
        this.choices = returnData;
    }
}