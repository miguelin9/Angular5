import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ProductService {

  productsList: AngularFireList<any>;
  selectProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts(): any {
    return this.productsList = this.firebase.list('products');
  }

  addProduct(product: Product) {
    this.productsList.push({
      price: product.price,
      name: product.name,
      stock: product.stock
    });
  }

  updateProduct(product: Product) {
    this.productsList.update(product.$key, {
      price: product.price,
      name: product.name,
      stock: product.stock
    });
  }

  deleteProduct($key: string) {
    this.productsList.remove($key);
  }

}