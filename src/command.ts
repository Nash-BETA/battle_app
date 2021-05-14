import { prompt } from 'inquirer';
import { CommandContent } from './commandContent';

export class Command {
  public commandContent : CommandContent;
  constructor(commandContent:CommandContent) {
    this.commandContent = commandContent;
  }

  select(): Promise<any> {
    const commandSelect = prompt([
      {
        type: this.commandContent.getType(),
        name: this.commandContent.getName(),
        message: this.commandContent.getMessage(),
        choices: this.commandContent.getChoices(),
      },
    ]);
    return commandSelect;
  }
}
