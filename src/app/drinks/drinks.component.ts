import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinkList: Drink[];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinkService.getDrinks()
      .snapshotChanges()
      .subscribe(item => {
        this.drinkList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.drinkList.push(x as Drink);
        });
      });
  }

}
