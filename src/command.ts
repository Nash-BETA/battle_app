import { prompt } from 'inquirer';

export class Command {
  type: string;
  name: string;
  message: string;
  choices: {name: string;value: string;}[];

  constructor(type: string, name: string, message: string, choices: { name: string; value: string; }[]) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  /**
   *
   * @returns
   */
  select(): Promise<any> {
    const userInput = prompt([
      {
        type: this.type,
        name: this.name,
        message: this.message,
        choices: this.choices,
      },
    ]);
    return userInput;
  }
}
