import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm) {
    this.productService.addProduct(productForm.value);
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm) {
    if(productForm != null) {
      productForm.reset();
      this.productService.selectProduct = new Product();
    }
  }

}
