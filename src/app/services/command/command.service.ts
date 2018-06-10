import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Command } from '../../models/command';
import { Product } from '../../models/product';

@Injectable()
export class CommandService {

  commandsList: AngularFireList<any>;
  selectCommand: Command = new Command();

  constructor(private firebase: AngularFireDatabase) { }

  getCommands(): any {
    return this.commandsList = this.firebase.list('commands');
  }

  openCommandWithTable(numberTable: number) {
    this.selectCommand.table = numberTable;
    this.selectCommand.state = true;
    this.selectCommand.productList = new Array<Product>();
    this.selectCommand.datetimeOpen = new Date().toLocaleString();
    this.selectCommand.datetimeClose = undefined;
  }

  saveCommand(total: number) {
    this.selectCommand.datetimeClose = new Date().toLocaleString();
    this.selectCommand.state = false;
    this.selectCommand.total = total;
    this.addCommand(this.selectCommand);
  }

  addCommand(command: Command) {
    console.log(command);
    console.log('guardada comanda');
    this.commandsList.push(command);
  }

  updateCommand(command: Command) {
    this.commandsList.update(command.$key, {
      table: command.table,
      state: command.state,
      productList: command.productList,
      datetimeOpen: command.datetimeOpen,
      datetimeClose: command.datetimeClose,
      comment: command.comment,
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