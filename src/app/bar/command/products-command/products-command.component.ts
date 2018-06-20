import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product/product.service';
import { CommandService } from '../../../services/command/command.service';

@Component({
  selector: 'app-products-command',
  templateUrl: './products-command.component.html',
  styleUrls: ['./products-command.component.css']
})
export class ProductsCommandComponent implements OnInit {

  productList: Product[];
  displayedColumns = ['name', 'price', 'stock', 'actions'];
  dataSource: MatTableDataSource<Product>; // lo mismos datos que el productList pero para poder ordenar en la tabla.

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productService: ProductService,
    public matDialog: MatDialog,
    private commandService: CommandService
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
        this.dataSource = new MatTableDataSource(this.productList);
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Productos por página';
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnInit() {
    this.refreshData();
  }

  add(product: Product): void {
    this.commandService.selectCommand.productList.push({
      name: product.name,
      price: product.price
    });
    product.stock = product.stock - 1;
    this.productService.updateProduct(product);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
