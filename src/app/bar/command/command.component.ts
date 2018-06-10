import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../services/command/command.service';
import { Command } from '../../models/command';
import { Product } from '../../models/product';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  displayedColumns = ['name', 'price'];

  constructor(private commandService: CommandService) { }

  ngOnInit() {}

  saveCommand(total: number) {
    this.commandService.saveCommand(total);
  }

  getTotalCost(): number {
    var total: number = 0;
    for (let index = 0; index < this.commandService.selectCommand.productList.length; index++) {
      total = total + this.commandService.selectCommand.productList[index].price;
    }

    return total;
  }

  deleteProduct(product: Product): void {
    let index = this.commandService.selectCommand.productList.indexOf(product);
    this.commandService.selectCommand.productList.splice(index, 1);
  }

}
