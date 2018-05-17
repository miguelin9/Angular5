import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../services/drink.service';
import { NgForm } from '@angular/forms';
import { Drink } from '../models/drink';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinkService.getDrinks();
    this.resetForm();
  }

  onSubmit(drinkForm: NgForm) {
    this.drinkService.addDrink(drinkForm.value);
    this.resetForm(drinkForm);
  }

  resetForm(drinkForm?: NgForm) {
    if(drinkForm != null) {
      drinkForm.reset();
      this.drinkService.selectDrink = new Drink();
    }
  }

}
