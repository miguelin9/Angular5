import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Command } from '../../models/command';

@Injectable()
export class CommandService {

  commandsList: AngularFireList<any>;
  selectCommand: Command = new Command();

  constructor(private firebase: AngularFireDatabase) { }

  getCommands(): any {
    return this.commandsList = this.firebase.list('commands');
  }

  addCommand(command: Command) {
    this.commandsList.push({
      table: command.table,
      state: command.state,
      productList: command.productList,
      datetimeOpen: command.datetimeOpen,
      datetimeClose: command.datetimeClose,
      tip: command.tip
    });
  }

  updateCommand(command: Command) {
    this.commandsList.update(command.$key, {
      table: command.table,
      state: command.state,
      productList: command.productList,
      datetimeOpen: command.datetimeOpen,
      datetimeClose: command.datetimeClose,
      tip: command.tip
    });
  }

  deleteCommand($key: string) {
    this.commandsList.remove($key);
  }

}

// $key?: string;
// table: number;
// state: boolean;
// productList: Command[];
// datetimeOpen: Date;
// datetimeClose: Date;