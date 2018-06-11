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

  saveCommand(total: number, pay: boolean) {
    this.checkProducts();
    if (!pay) {
      pay = false;
    }
    if (this.commandService.selectCommand.productList.length <= 0) {
      this.commandService.selectCommand.productList = new Array<Product>();
    }
    this.commandService.saveCommand(total, pay);
  }

  payCommand(total: number, print: Element) {
    this.checkProducts();
    this.saveCommand(total, true);
    var printContents = print.innerHTML;
    var popupWin = window.open('', '_blank', 'width=300,height=300');
    popupWin.document.open();
    popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
    popupWin.document.close();
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

  checkProducts() {
    if (!this.commandService.selectCommand.productList) {
      this.commandService.selectCommand.productList = new Array<Product>();
    }
  }

}
