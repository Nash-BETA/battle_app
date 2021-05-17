import { Command } from '@oclif/command';
import { main } from './main';
import { FushigidaneMonster } from './monster/fushigidaneMonster';
import { WonMonster } from './wonMonster';



class SampleCommand extends Command {
  //実行コマンド
  async run() {
//    const technique_test = new TechniqueList([new Technique('たいあたり','ふつう',20)]);
    const ownMonster = new WonMonster([new FushigidaneMonster()]);
    const enemyMonster = new WonMonster([new FushigidaneMonster()]);

    const main_class = new main(ownMonster,enemyMonster);
    main_class.start();
  }
}
export = SampleCommand;