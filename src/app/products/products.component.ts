import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product[];
  displayedColumns = ['id', 'name', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .snapshotChanges()
      .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.productList.push(x as Product);
        });
      });
  }

  addProduct(): void {
    this.productService.addProduct({
      'id': 3,
      'name': 'miguel'
    });
  }

  edit(product): void {
    this.productService.updateProduct({
      $key: product.$key,
      id: 14,
      name: 'editado'
    });
  }

  delete(product): void {
    alert(product.$key);
    // this.productService.deleteProduct('-LDVxusdIk6eQ__gGmyZ');
    this.productService.deleteProduct(product.$key);
  }
}
