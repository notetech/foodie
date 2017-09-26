import { Component , OnInit } from '@angular/core';
import { Food } from './models/food';
import { Cart } from './models/cart';

import { FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  foodItems: Food[] = [];

  cart: Cart = new Cart();

  ngOnInit() {

    this.foodItems = this.foodSvc.getAllItems();

    console.info('Fruits , ',this.foodItems);
  }

  constructor(private foodSvc: FoodService) {


  }

  onAddToCartHandler(food: Food) {

    this.cart.addToCart(food);

    console.log('Cart Updated ', this.cart)
    
  }

  
}
