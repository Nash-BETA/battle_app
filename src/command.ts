import { prompt } from 'inquirer';
import { CommandContent } from './commandContent';

export class Command {
  public commandContent : CommandContent;
  constructor(commandContent:CommandContent) {
    this.commandContent = commandContent;
  }

  /**
   *
   * @returns
   */
  select(): Promise<any> {
    const userInput = prompt([
      {
        type: this.commandContent.getType(),
        name: this.commandContent.getName(),
        message: this.commandContent.getMessage(),
        choices: this.commandContent.getChoices(),
      },
    ]);
    return userInput;
  }
}
