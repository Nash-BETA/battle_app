import { Command } from '@oclif/command';
import { Main } from './main';



class RunCommand extends Command {
  //実行コマンド
  async run() {
    const main_class = new Main();
    main_class.start();
  }
}
export = RunCommand;