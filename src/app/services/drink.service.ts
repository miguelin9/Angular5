import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink';
import { DRINKS } from '../models/mocks-drinks';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DrinkService {

  drinksList: AngularFireList<any>;
  selectDrink: Drink = new Drink();

  constructor(private firebase: AngularFireDatabase) { }

  getDrinks(): any {
    return this.drinksList = this.firebase.list('drinks');
  }

  addDrink(drink: Drink) {
    this.drinksList.push({
      id: drink.id,
      name: drink.name
    });
  }

  updateDrink(drink: Drink) {
    this.drinksList.update(drink.$key, {
      id: drink.id,
      name: drink.name
    });
  }

  deleteDrink($key: string) {
    this.drinksList.remove($key);
  }

}