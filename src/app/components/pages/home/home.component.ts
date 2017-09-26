import { Component, OnInit } from '@angular/core';
import { Food } from '../../../models/food';
import { Cart } from '../../../models/cart';

import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodItems: Food[] = [];

  cart: Cart = new Cart();

  ngOnInit() {

    this.foodItems = this.foodSvc.getAllItems();

    console.info('Fruits , ',this.foodItems);
  }

  constructor(
    private foodSvc: FoodService,
    private cartSvc: CartService
  ) {

    this.cart = this.cartSvc.getCart();
  }

  onAddToCartHandler(food: Food) {

    this.cart.addToCart(food);

    console.log('Cart Updated ', this.cart)
    
  }

}
