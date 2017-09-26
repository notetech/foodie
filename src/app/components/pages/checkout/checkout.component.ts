import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart:Cart;

  constructor(
    private cartSvc: CartService

  ) { 
    this.cart = this.cartSvc.getCart();
  }

  ngOnInit() {

    
  }

}
