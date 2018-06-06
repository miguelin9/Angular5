import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables = ['Barra'];
  counter = 1;

  constructor() { }

  ngOnInit() {
  }

  addTable() {
    this.tables.push('Mesa ' + this.counter);
    this.counter = this.counter + 1;
  }

  deleteTable() {
    this.tables.pop();
    this.counter = this.counter - 1;
  }

  openTable(index: number) {
    console.log(index);
  }

}
