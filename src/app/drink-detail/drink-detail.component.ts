import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../models/drink';
import { Location } from '@angular/common';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.css']
})
export class DrinkDetailComponent implements OnInit {

  @Input()
  drink: Drink;

  constructor(
    // private route: ActivatedRoute,
    // private drinkService: DrinkService,
    // private location: Location
  ) { }

  ngOnInit() {
    // this.getDrink();
  }

  // getDrink(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.drink = this.drinkService.getDrink(id);
  // }

  goBack(): void {
    // this.location.back();
  }

}
