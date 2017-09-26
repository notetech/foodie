import { Injectable } from '@angular/core';
import { Cart } from '../models/cart'

@Injectable()
export class CartService {

  cart: Cart = new Cart();

  constructor() { }

  getCart() {
    
    return this.cart;


  }

  updateCart(cart: Cart) {
    this.cart = cart;
  }

}
