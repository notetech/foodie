import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'cart-bar',
  templateUrl: './cart-bar.component.html',
  styleUrls: ['./cart-bar.component.css']
})
export class CartBarComponent implements OnInit {

  cart : Cart;
  constructor(

    private cartSvc: CartService

  ) { 

    this.cart = this.cartSvc.getCart();

  }

  ngOnInit() {
  }

}
