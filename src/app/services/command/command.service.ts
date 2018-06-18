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
    this.selectCommand.pay = false;
    this.selectCommand.state = true;
    if (!this.selectCommand.productList) {
      this.selectCommand.productList = new Array<Product>();
      this.selectCommand.datetimeOpen = new Date().toLocaleString();
      this.selectCommand.datetimeClose = undefined;
    }
  }

  openCommandWithEdit(command: Command) {
    this.selectCommand = command;
    if (this.selectCommand.productList) {
      this.selectCommand.productList = Object.values(command.productList);
    } else {
      this.selectCommand.productList = new Array<Product>();
    }
    this.selectCommand.state = true;
  }

  saveCommand(total: number, pay: boolean) {
    this.selectCommand.datetimeClose = new Date().toLocaleString();
    this.selectCommand.state = false;
    this.selectCommand.total = total;
    this.selectCommand.pay = pay;
    if (this.selectCommand.$key) {
      this.updateCommand(this.selectCommand);
    } else {
      this.addCommand(this.selectCommand);
    }
    this.selectCommand = new Command();
  }

  updateCommand(command: Command) {
    console.log('updateCommand --- start');
    if (!this.selectCommand.comment) {this.selectCommand.comment = '';}
    if (!this.selectCommand.tip) {this.selectCommand.tip = 0}
    this.commandsList.update(command.$key, {
      table: this.selectCommand.table,
      state: this.selectCommand.state,
      productList: this.selectCommand.productList,
      datetimeOpen: this.selectCommand.datetimeOpen,
      datetimeClose: this.selectCommand.datetimeClose,
      comment: this.selectCommand.comment,
      tip: this.selectCommand.tip,
      total: this.selectCommand.total,
      pay: this.selectCommand.pay
    });
    console.log('updateCommand --- end');
  }

  addCommand(command: Command) {
    this.commandsList.push(command);
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