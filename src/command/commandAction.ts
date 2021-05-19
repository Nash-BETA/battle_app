import { commandAbstract } from "./commandAbstract";

//行動
export class CommandAction extends commandAbstract  {
    protected type: string    = 'list';
    protected name: string    = 'action';
    protected message: string = 'こうどうは？';
    protected choices: { name: string; value: string }[] = [{ name: 'こうげき', value: 'battle' }, { name: 'いれかえる', value: 'change' },{ name: 'にげる', value: 'escape' }];
}