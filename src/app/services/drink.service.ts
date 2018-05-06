import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink';
import { DRINKS } from '../models/mocks-drinks';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DrinkService {

  private drinksRef: AngularFireList<any>;

  constructor() { }

  addDrink(drink: Drink): void {
    this.drinksRef.push(drink);
  }

  getDrinks(): Drink[] {
    return DRINKS;
  }

  getDrink(id: number): Drink {
    return DRINKS.find(drink => drink.id === id);
  }

}

// private articulosRef:AngularFireList<any>;

// constructor(public db: AngularFireDatabase) {
//     this.articulosRef = this.db.list<Articulo>('tiendaionic');
//     console.log(this.articulosRef);
// }
// getArticulos(): Observable<Articulo[]> {
//     return this.articulosRef.snapshotChanges().map((arr) => {
//         return arr.map((snap) => Object.assign(snap.payload.val(), { key: snap.key }) );
//       });
// }
// insertarArticulo(articulo:Articulo) {
//     this.articulosRef.push(articulo);
// }
// actualizarArticulo(key:string, articulo:Articulo) {
//     console.log('--------------------' + key);
//     this.articulosRef.update(key, articulo);
// }
// eliminarArticulo(articulo:Articulo) {
//     this.articulosRef.remove(articulo.key);
// }