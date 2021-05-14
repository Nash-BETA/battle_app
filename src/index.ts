import { Command } from '@oclif/command';
import { main } from './main';
import { WonMonster } from './wonMonster';
import { Monster } from './Monster';
import { Technique } from './technique';
import { TechniqueList } from './techniqueList';

class SampleCommand extends Command {
  //実行コマンド
  async run() {
    const technique_test = new TechniqueList([new Technique('たいあたり','ふつう',20)]);
    const ownMonster = new WonMonster([new Monster('aaaa', technique_test, 100)]);
    const enemyMonster = new WonMonster([new Monster('aaaa', technique_test, 100)]);

    const main_class = new main(ownMonster,enemyMonster);
    main_class.start();
  }
}
export = SampleCommand;