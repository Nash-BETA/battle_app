import { commandAbstract } from "./commandAbstract";

export class CommandAction extends commandAbstract  {
    type: string    = 'list';
    name: string    = 'action';
    message: string = 'こうどうは？';
    choices: { name: string; value: string }[] = [{ name: 'こうげき', value: 'battle' }, { name: 'いれかえる', value: 'change' },{ name: 'にげる', value: 'escape' }];
}