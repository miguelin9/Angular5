import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  drinks: Drink[] = [];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    this.drinks = this.drinkService.getDrinks();
  }

}
