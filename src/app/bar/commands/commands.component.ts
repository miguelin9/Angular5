import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  productList: Product[];

  constructor(
    private productService: ProductService
  ) { }

  refreshData() {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(dataSnapshotList => {
        this.productList = [];
        dataSnapshotList.forEach(dataSnapshot => {
          let product = dataSnapshot.payload.toJSON();
          product['$key'] = dataSnapshot.key;
          this.productList.push(product as Product);
        });
      });
  }

  ngOnInit() {
    this.refreshData();
  }

}
