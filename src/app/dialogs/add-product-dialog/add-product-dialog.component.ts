import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  isEdit: boolean
  product: Product;
  controlForm: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    private productService: ProductService
  ) { }

  ngOnInit() {
    if (!this.product) {
      this.product = {price: undefined, name: '', stock: undefined};
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
