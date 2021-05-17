import { commandAbstract } from "./commandAbstract";

export class CommandAction extends commandAbstract  {
    type: string    = 'list';
    name: string    = 'action';
    message: string = 'こうげきは？';
    choices: { name: string; value: string }[] = [{ name: 'にげる', value: 'escape' }, { name: 'こうげき', value: 'battle' }];
}