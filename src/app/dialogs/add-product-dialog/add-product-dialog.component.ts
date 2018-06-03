import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html'
})
export class AddProductDialogComponent implements OnInit {

  isEdit: boolean
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (!this.product) {
      this.product = {id: undefined, name: ''};
    }
  }

  addProduct(): void {
    this.productService.addProduct(this.product);
    this.dialogRef.close();
  }

  editProduct(): void {
    this.productService.updateProduct(this.product);
    this.dialogRef.close();
  }

}
