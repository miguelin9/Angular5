import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/mocks-products';
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
      id: product.id,
      name: product.name
    });
  }

  updateProduct(product: Product) {
    this.productsList.update(product.$key, {
      id: product.id,
      name: product.name
    });
  }

  deleteProduct($key: string) {
    this.productsList.remove($key);
  }

}