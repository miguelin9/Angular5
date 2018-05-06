import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks: Drink[];
  selectedDrink: Drink;

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    this.drinks = this.drinkService.getDrinks();
  }

  onSelect(drink: Drink): void {
    this.selectedDrink = drink;
  }

}
