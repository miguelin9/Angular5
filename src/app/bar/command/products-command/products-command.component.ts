import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product/product.service';
import { AddProductDialogComponent } from '../../../dialogs/add-product-dialog/add-product-dialog.component';
import { YesNoDialogComponent } from '../../../dialogs/yes-no-dialog/yes-no-dialog.component';

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

  constructor(
    private productService: ProductService,
    public matDialog: MatDialog
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
      });
  }

  ngOnInit() {
    this.refreshData();
  }

  addProduct(): void {
    const dialogRef = this.matDialog.open(AddProductDialogComponent);
    dialogRef.componentInstance.isEdit = false;
  }

  edit(product): void {
    const dialogRef = this.matDialog.open(AddProductDialogComponent);
    dialogRef.componentInstance.product = product;
    dialogRef.componentInstance.isEdit = true;
    dialogRef.afterClosed().subscribe(data => {
      this.refreshData();
    });
  }

  delete(product): void {
    this.matDialog.open(YesNoDialogComponent).afterClosed().subscribe(
      data => {
        if (data) {
          this.productService.deleteProduct(product.$key)
        }
      }
    );
  }
}
