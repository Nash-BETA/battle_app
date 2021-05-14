import { prompt } from 'inquirer';

export abstract class CommandAbstract {
  type: string;
  name: string;
  message: string;
  choices: [];

  constructor(type: string, name: string, message: string, choices: []) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  select() {
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
