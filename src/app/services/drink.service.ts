import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../models/drink';
import { DRINKS } from '../models/mocks-drinks';

@Injectable()
export class DrinkService {

  constructor() { }

  getDrinks(): Drink[] {
    return DRINKS;
  }

  getDrink(id: number): Drink {
    return DRINKS.find(drink => drink.id === id);
  }

}
