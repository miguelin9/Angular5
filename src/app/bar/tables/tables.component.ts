import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../services/command/command.service';
import { Command } from '../../models/command';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables = ['Barra'];

  constructor(
    private commandService: CommandService
  ) { }

  ngOnInit() {
  }

  addTable() {
    this.tables.push('Mesa ' + this.tables.length);
  }

  deleteTable() {
    if (this.tables.length > 1) {
      this.tables.pop();
    }
  }

  openCommand(index: number) {
    this.commandService.openCommandWithTable(index);
  }

}

// $key?: string;
// table?: number;
// state: boolean;
// productList: Product[];
// datetimeOpen: Date;
// datetimeClose: Date;
// comment?: string;
// tip?: number;