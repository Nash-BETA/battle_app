import { Command } from '@oclif/command';
import { main } from './main';
import { Monster } from './monster';

class SampleCommand extends Command {
  //実行コマンド
  async run() {
    const main_class = new main(new Monster('aaaa',{'111' : 111},100));
    main_class.start();
  }
}
export = SampleCommand;